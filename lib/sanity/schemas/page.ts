import { defineArrayMember, defineField, defineType } from 'sanity'
// schemas/page.js
const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'imageSection',
          type: 'imageSection',
        }),
        defineArrayMember({
          name: 'imageSection2',
          type: 'imageSection2',
        }),
        defineArrayMember({
          name: 'textBlockSection',
          type: 'textBlockSection',
        }),
        defineArrayMember({
          name: 'feedBackSection',
          type: 'feedBackSection',
        }),
        // defineArrayMember({
        //   name: 'buttonSection',
        //   type: 'buttonSection',
        // }),
        // defineArrayMember({
        //   name: 'videoSection',
        //   type: 'videoSection',
        // }),
      ],
    }),
  ],
})

export default page;
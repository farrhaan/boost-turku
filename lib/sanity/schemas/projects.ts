import { defineArrayMember, defineField, defineType } from 'sanity'
// schemas/page.js
const projects = defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
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
          name: 'plainText',
          type: "plainText"
        }),
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
        defineArrayMember({
          name: 'descriptiveButton',
          type: 'descriptiveButton',
        }),
        // defineArrayMember({
        //   name: 'videoSection',
        //   type: 'videoSection',
        // }),
      ],
    }),
  ],
})

export default projects;
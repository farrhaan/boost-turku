import { defineField, defineType } from 'sanity'

export const imageSection = defineType({
  name: 'imageSection',
  type: 'object',
  title: 'Image Section',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'points',
      type: 'array',
      of: [
        { name: "point", type: "string" }
      ]
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
})

export default imageSection;
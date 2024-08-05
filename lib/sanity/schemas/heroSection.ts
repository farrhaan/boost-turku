import { defineField, defineType } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  type: 'object',
  title: 'Hero Section',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'mainText',
      type: 'string',
    }),
    defineField({
      name: 'subText',
      type: 'string',
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

export default heroSection;
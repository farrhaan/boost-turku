import { defineField, defineType } from 'sanity'

export const aboutSectionHome = defineType({
    name: 'aboutSectionHome',
    type: 'object',
    title: 'About Section',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
            name: 'aboutText',
            type: 'string',
        }),
    ],
})

export default aboutSectionHome;
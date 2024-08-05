import { defineField, defineType } from 'sanity'

export const textBlockSection = defineType({
    name: 'textBlockSection',
    type: 'object',
    title: 'Text Block',
    fields: [
        defineField({
            name: 'headingText',
            type: 'string',
        }),
        defineField({
            name: 'descriptionText',
            type: 'text',
        }),
        defineField({
            name: 'points',
            type: 'array',
            of: [
                { name: "point", type: "string" }
            ]
        }),
    ],
})

export default textBlockSection;
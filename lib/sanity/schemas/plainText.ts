import { defineField, defineType } from 'sanity'

export const plainText = defineType({
    name: 'plainText',
    type: 'object',
    title: 'Plain Text',
    fields: [
        defineField({
            name: 'text',
            type: 'text',
        }),
    ],
})

export default plainText;
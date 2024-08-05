import { defineField, defineType } from 'sanity'

export const descriptiveButton = defineType({
    name: 'descriptiveButton',
    type: 'object',
    title: 'Descriptive Text with Button',
    fields: [
        defineField({
            name: 'textBig',
            type: 'text',
        }),
        defineField({
            name: 'text',
            type: 'text',
        }),

        defineField({
            name: 'buttonText',
            type: 'string',
        }),

        defineField({
            name: 'buttonUrl',
            type: 'string',
        }),

        defineField({
            name: 'buttonDisabled',
            type: 'boolean',
        }),
    ],

})

export default descriptiveButton;
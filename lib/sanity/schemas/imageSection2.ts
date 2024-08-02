// ./schemas/textWithIllustration.js

import { defineField, defineType } from 'sanity'

export const imageSection2 = defineType({
    name: 'imageSection2',
    type: 'object',
    title: 'Image Section 2',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'bulletPoints',
            type: "array",
            of: [{ type: "string", name: "title" }, { type: "string", name: "description" }]
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

export default imageSection2;
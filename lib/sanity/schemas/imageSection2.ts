// ./schemas/textWithIllustration.js

import { defineField, defineType } from 'sanity'

export const imageSection2 = defineType({
    name: 'imageSection2',
    type: 'object',
    title: 'Image Section II',
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
            name: 'bulletPoints',
            type: 'array',
            of: [{
                type: "object", name: "Point", title: "Point", fields: [
                    defineField({ type: "string", name: "title", title: "Title" }),
                    defineField({ type: "string", name: "description", title: "Description" })
                ]
            }]
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
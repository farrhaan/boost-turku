import { defineField, defineType } from 'sanity'

export const partner = defineType({
    name: 'partner',
    type: 'object',
    title: 'Partners',
    fields: [
        defineField({
            name: 'partners',
            type: 'array',
            of: [{ name: "imgSrc", type: "image" }]
        })
    ],
})

export default partner;
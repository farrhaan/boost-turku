import { defineField, defineType } from 'sanity'

export const partnersSection = defineType({
    name: 'partnersSection',
    type: 'object',
    title: 'Partners Section',
    fields: [
        defineField({
            name: 'partners',
            type: 'array',
            of: [
                { name: "imgSrc", type: "image" }]
        }),
        defineField({
            name: 'keyPartners',
            type: 'array',
            of: [
                { name: "imgSrc", type: "image" }]
        })
    ],
})

export default partnersSection;
import { defineField, defineType } from 'sanity'

export const exploreCard = defineType({
    name: 'exploreCard',
    type: 'object',
    title: 'Explore Card',
    fields: [
        defineField({
            name: 'card_id',
            type: 'string',
        }),
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'url',
            type: 'string',
        }),
    ],
})

export default exploreCard;
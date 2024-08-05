import { defineField, defineType } from 'sanity'

export const exploreSection = defineType({
    name: 'exploreSection',
    type: 'object',
    title: 'Explore Section',
    fields: [
        defineField({ name: 'title', type: 'string', title: 'Explore More' }),
        defineField({
            name: 'exploreMore',
            type: 'array',
            title: 'Explore Cards',
            of: [{ type: 'exploreCard' }],
        }),
    ],
})

export default exploreSection;
import { defineField, defineType } from 'sanity'

export const feedBackSection = defineType({
    name: 'feedBackSection',
    type: 'object',
    title: 'Text Block',
    fields: [
        defineField({
            name: 'personName',
            title: "Person Name",
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: "Title",
            type: 'string',
        }),
        defineField({
            name: 'message',
            type: "image",
            title: "Image",
        }),
    ],
})

export default feedBackSection;
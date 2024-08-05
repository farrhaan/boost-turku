import { defineField, defineType } from 'sanity'

const textType = defineType({
    name: 'text',
    type: 'text',
})

export const feedBackSection = defineType({
    name: 'feedBackSection',
    type: 'object',
    title: 'Feedback Section',
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
            type: "text",
            title: "Feedback Message",
        }),
        defineField({
            name: 'image',
            type: "image",
            title: "Feedback Image",
        }),
    ],
})

export default feedBackSection;
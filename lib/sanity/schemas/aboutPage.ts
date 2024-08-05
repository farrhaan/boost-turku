import { defineArrayMember, defineField, defineType } from 'sanity'
// schemas/page.js
const aboutPage = defineType({
    name: 'aboutPage',
    type: 'document',
    title: 'About Page',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
            name: 'sections',
            type: 'array',
            title: 'Sections',
            of: [
                defineArrayMember({
                    name: 'textBlockSection',
                    type: 'textBlockSection',
                }),
                defineArrayMember({
                    name: 'imageSection',
                    type: 'imageSection',
                }),
                defineArrayMember({
                    name: 'teamSection',
                    type: 'teamSection',
                }),
                defineArrayMember({
                    name: 'partnersSection',
                    type: 'partnersSection',
                }),
                defineArrayMember({
                    name: 'imageSection2',
                    type: 'imageSection2',
                }),
            ],
        }),
    ],
})

export default aboutPage;
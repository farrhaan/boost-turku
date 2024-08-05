import { defineArrayMember, defineField, defineType } from 'sanity'
// schemas/page.js
const home = defineType({
    name: 'home',
    type: 'document',
    title: 'Home Page',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
            name: 'sections',
            type: 'array',
            title: 'Sections',
            of: [
                defineArrayMember({
                    name: 'heroSection',
                    type: 'heroSection',
                }),
                defineArrayMember({
                    name: 'aboutSectionHome',
                    type: 'aboutSectionHome',
                }),
                defineArrayMember({
                    name: 'exploreSection',
                    type: 'exploreSection',
                }),
                defineArrayMember({
                    name: 'imageSection',
                    type: 'imageSection',
                }),
                defineArrayMember({
                    name: 'imageSection2',
                    type: 'imageSection2',
                }),
                defineArrayMember({
                    name: 'textBlockSection',
                    type: 'textBlockSection',
                })
            ],
        }),
    ],
})

export default home;
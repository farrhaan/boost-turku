import { defineField, defineType } from 'sanity'

export const partnersSection = defineType({
    name: 'partnersSection',
    type: 'object',
    title: 'Partners Section',
    fields: [
        defineField({ name: "partnersDetail", title: "Partners Detail", type: "string" }),
        defineField({
            name: "partners",
            type: "array",
            of: [
                defineField({
                    type: "object",
                    name: "partnerDetails",
                    fields: [

                        defineField({
                            name: 'title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'partners',
                            type: 'partner'
                        })
                    ]
                })
            ]
        })
    ],
})

export default partnersSection;
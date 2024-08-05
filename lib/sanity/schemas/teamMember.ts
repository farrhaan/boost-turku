// schemas/teamMember.js
import { defineField, defineType } from 'sanity';

const teamMember = defineType({
    name: 'teamMember',
    type: 'object',
    title: 'Team Member',
    fields: [
        defineField({ name: 'name', type: 'string', title: 'Name' }),
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({
            name: 'imgSrc',
            type: 'image',
            title: 'Image Source',
            options: {
                hotspot: true,
            },
        }),
        defineField({ name: 'email', type: 'string', title: 'Email' }),
    ],
});

export default teamMember;

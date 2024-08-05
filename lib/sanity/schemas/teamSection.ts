// schemas/team.js
import { defineField, defineType } from 'sanity';

const teamSection = defineType({
    name: 'teamSection',
    type: 'object',
    title: 'Team',
    fields: [
        defineField({ name: 'teamTitle', type: 'string', title: 'Team Title' }),
        defineField({
            name: 'teamMembers',
            type: 'array',
            title: 'Team Members',
            of: [{ type: 'teamMember' }],
        }),
    ],
});

export default teamSection;

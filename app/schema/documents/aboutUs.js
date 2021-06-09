import {
  BsPerson as AboutUsIcon,
} from 'react-icons/bs'

export default {
  name: 'aboutUs',
  type: 'document',
  icon: AboutUsIcon,
  fields: [
    {
      name: 'aboutUsHeroTitle',
      type: 'string',
    },
    {
      name: 'aboutUsSubTitle',
      type: 'string',
    },
    {
      name: 'aboutUsTitle',
      type: 'string',
    },
    {
      name: 'aboutUsTextLeft',
      type: 'text',
    },
    {
      name: 'aboutUsTextRight',
      type: 'text',
    },

    {
      name: 'ourValuesSubTitle',
      type: 'string',
    },
    {
      name: 'ourValuesList',
      type: 'array',
      of: [{ type: 'imageCard', name: 'ourValues' }],
    },

    {
      name: 'theTeamSubTitle',
      type: 'string',
    },
    {
      name: 'theTeamTitle',
      type: 'string',
    },

    {
      name: 'teams',
      type: 'array',
      of: [
        {
          name: 'team',
          type: 'object',
          fields: [
            {
              name: 'teamName',
              type: 'string',
            },
            {
              name: 'teamMembers',
              type: 'array',
              of: [
                { 
                  type: 'userCard',
                  name: 'teamMember', 
                }
              ]
            }
          ]
        }
      ]
    },

    {
      name: 'joinTheTeamTitle',
      type: 'string',
    },
    {
      name: 'joinTheTeamText',
      type: 'text',
    },
    {
      name: 'joinTheTeamButton',
      type: 'navigationButton',
    },
  ]
}

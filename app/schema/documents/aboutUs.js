import {
  BsPerson as AboutUsIcon,
} from 'react-icons/bs'

export default {
  name: 'aboutUs',
  type: 'document',
  icon: AboutUsIcon,
  fields: [
    {
      name: 'heroTitle',
      type: 'string',
    },
    {
      name: 'heroImage',
      type: 'image',
    },
    {
      name: 'subTitle',
      type: 'string',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'bodyTextLeft',
      type: 'text',
    },
    {
      name: 'bodyTextRight',
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
                  name: 'teamMember',
                  type: 'personCard',
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

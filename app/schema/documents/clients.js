import {
  MdBusiness as ClientsIcon,
} from 'react-icons/md'

export default {
  name: 'clients',
  type: 'document',
  icon: ClientsIcon,
  fields: [
    {
      name: 'heroTitle',
      type: 'string',
    },
    {
      name: 'heroText',
      type: 'text',
    },
    {
      name: 'heroImage',
      type: 'image',
    },
    {
      name: 'heroButton',
      type: 'navigationButton',
    },
    {
      name: 'heroSubText',
      type: 'string',
    },

    {
      name: 'partnersTitle',
      type: 'string',
    },
    {
      name: 'partnersImageList',
      type: 'array',
      of: [{ type: 'image', name: 'partnersImage', title: 'Partners Image' }],
    },

    {
      name: 'contentBlocks',
      type: 'array',
      of: [{ type: 'imageTextBlock', name: 'contentBlock' }],
    },

    {
      name: 'practionersTitle',
      type: 'string',
    },
    {
      name: 'practionersList',
      type: 'array',
      of: [{
        name: 'practionerStatment',
        title: 'Practioner Statment',
        type: 'object',
        fields: [
          {
            name: 'practionerName',
            type: 'string',
          },
          {
            name: 'practionerTitle',
            type: 'string',
          },
          {
            name: 'practionerImage',
            type: 'image',
          },
          {
            name: 'practionerText',
            type: 'text',
          },
        ]
      }],
    },
  ]
}

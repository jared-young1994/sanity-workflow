import {
  MdBusiness as ClientsIcon,
} from 'react-icons/md'

export default {
  name: 'clients',
  type: 'document',
  icon: ClientsIcon,
  fields: [
    {
      name: 'clientsTitle',
      type: 'string',
    },
    {
      name: 'clientsText',
      type: 'text',
    },
    {
      name: 'clientsImage',
      type: 'image',
    },
    {
      name: 'clientsButton',
      type: 'navigationButton',
    },
    {
      name: 'clientsSubText',
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
      name: 'clientContentBlocks',
      type: 'array',
      of: [{ type: 'imageTextBlock', name: 'clientContentBlock', title: 'Content Block' }],
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

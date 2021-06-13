import {
  FiHome as HomeIcon,
} from 'react-icons/fi'

export default {
  name: 'homePage',
  type: 'document',
  icon: HomeIcon,
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
      name: 'heroButton',
      type: 'navigationButton',
    },
    {
      name: 'heroImage',
      type: 'image',
    },

    {
      name: 'caption1Icon',
      type: 'iconPicker',
    },
    {
      name: 'caption1Title',
      type: 'string',
    },
    {
      name: 'caption1Text',
      type: 'text',
    },
    {
      name: 'caption1Button',
      type: 'navigationButton',
    },
    {
      name: 'caption1Cards',
      type: 'array',
      of: [{ type: 'imageLinkCard', name: 'caption1Card', title: 'Card' }],
    },

    {
      name: 'caption2Icon',
      type: 'iconPicker',
    },
    {
      name: 'caption2Title',
      type: 'string',
    },
    {
      name: 'caption2Text',
      type: 'text',
    },
    {
      name: 'caption2Button',
      type: 'navigationButton',
    },
    {
      name: 'caption2Cards',
      type: 'array',
      of: [{ type: 'imageLinkCard' }],
    },

    {
      name: 'caption3Icon',
      type: 'iconPicker',
    },
    {
      name: 'caption3Title',
      type: 'string',
    },
    {
      name: 'caption3Text',
      type: 'text',
    },
    {
      name: 'caption3Button',
      type: 'navigationButton',
    },
    {
      name: 'caption3Cards',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'cardIcon',
            type: 'iconPicker',
          },
          {
            name: 'cardBody',
            type: 'string',
          },
          {
            name: 'cardText',
            type: 'string',
          }
        ]
      }
      ],
    },

    {
      name: 'testimonialTitle',
      type: 'string',
    },
    {
      name: 'testimonials',
      type: 'array',
      of: [{ type: 'testimonialCard', name: 'testimonal' }],
    },
  ]
}

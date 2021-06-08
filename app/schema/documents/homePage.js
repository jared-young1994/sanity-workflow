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
      type: 'string',
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
      type: 'string',
    },
    {
      name: 'caption1Title',
      type: 'string',
    },
    {
      name: 'caption1Text',
      type: 'string',
    },
    {
      name: 'caption1Button',
      type: 'navigationButton',
    },
    {
      name: 'caption1Cards',
      type: 'array',
      of: [{ type: 'imageCard' }],
    },

    {
      name: 'caption2Icon',
      type: 'string',
    },
    {
      name: 'caption2Title',
      type: 'string',
    },
    {
      name: 'caption2Text',
      type: 'string',
    },
    {
      name: 'caption2Button',
      type: 'navigationButton',
    },
    {
      name: 'caption2Cards',
      type: 'array',
      of: [{ type: 'imageCard' }],
    },

    {
      name: 'caption3Icon',
      type: 'string',
    },
    {
      name: 'caption3Title',
      type: 'string',
    },
    {
      name: 'caption3Text',
      type: 'string',
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
            type: 'string',
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
      of: [{
        type: 'object',
        fields: [
          {
            name: 'testimonialText',
            type: 'string',
          },
          {
            name: 'testimonialAuthor',
            type: 'string',
          },
        ]
      }],
    },

    {
      name: 'getClearheadTitle',
      type: 'string',
    },
    {
      name: 'getClearheadText',
      type: 'string',
    },
    {
      name: 'getClearheadImage',
      type: 'image',
    },
    {
      name: 'getClearheadButton',
      type: 'navigationButton',
    },
    {
      name: 'getClearheadDownloadLink1',
      type: 'url',
    },
    {
      name: 'getClearheadDownloadLink2',
      type: 'url',
    },
  ]
}

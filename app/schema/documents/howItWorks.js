import {
  GrCircleQuestion as HowItWorksIcon,
} from 'react-icons/gr'

export default {
  name: 'howItWorks',
  type: 'document',
  icon: HowItWorksIcon,
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
      name: 'contentBlocks',
      type: 'array',
      of: [{ type: 'imageTextBlock', name: 'contentBlock' }],
    }
  ]
}

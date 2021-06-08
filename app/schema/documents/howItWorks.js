import {
  GrCircleQuestion as HowItWorksIcon,
} from 'react-icons/gr'

export default {
  name: 'howItWorks',
  type: 'document',
  icon: HowItWorksIcon,
  fields: [
    {
      name: 'howItWorksTitle',
      type: 'string',
    },
    {
      name: 'howItWorksText',
      type: 'text',
    },
    {
      name: 'howItWorksImage',
      type: 'image',
    },
    {
      name: 'howItWorksButton',
      type: 'navigationButton',
    },
    {
      name: 'howItWorksContent',
      type: 'array',
      of: [{ type: 'imageTextBlock', name: 'howItWorksContentBlock', title: 'Content Block' }],
    }
  ]
}

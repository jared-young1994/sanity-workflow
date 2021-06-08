import {
  AiOutlineDownload as getClearheadIcon,
} from 'react-icons/ai'

export default {
  name: 'getClearhead',
  type: 'document',
  icon: getClearheadIcon,
  fields: [
    {
      name: 'getClearheadTitle',
      type: 'string',
    },
    {
      name: 'getClearheadText',
      type: 'text',
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
      type: 'navigationButton',
    },
    {
      name: 'getClearheadDownloadLink2',
      type: 'navigationButton',
    },
  ]
}

import {
  AiOutlineDownload as getClearheadIcon,
} from 'react-icons/ai'

export default {
  name: 'getClearhead',
  type: 'document',
  icon: getClearheadIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'navigationButton',
      type: 'navigationButton',
    },
    {
      name: 'downloadLink1',
      type: 'navigationButton',
    },
    {
      name: 'downloadLink2',
      type: 'navigationButton',
    },
  ]
}

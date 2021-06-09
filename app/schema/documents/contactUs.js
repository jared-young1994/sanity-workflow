import {
  GrCircleQuestion as ContactUsIcon,
} from 'react-icons/gr'

export default {
  name: 'contactUs',
  type: 'document',
  icon: ContactUsIcon,
  fields: [
    {
      name: 'contactUsTitle',
      type: 'string',
    },
    {
      name: 'contactUsText',
      type: 'text',
    },

    {
      name: 'addressIcon',
      type: 'iconPicker',
    },
    {
      name: 'addressLine1',
      type: 'string',
    },
    {
      name: 'addressLine2',
      type: 'string',
    },
    {
      name: 'addressLine3',
      type: 'string',
    },

    {
      name: 'emailIcon',
      type: 'iconPicker',
    },
    {
      name: 'emailAddress',
      type: 'string',
    },
  ]
}

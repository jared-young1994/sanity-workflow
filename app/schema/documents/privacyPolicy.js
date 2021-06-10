import {
  AiOutlineLock as PrivacyPolicyIcon,
} from 'react-icons/ai'

export default {
  name: 'privacyPolicy',
  type: 'document',
  icon: PrivacyPolicyIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'text',
      type: 'richText',
    },
  ]
}

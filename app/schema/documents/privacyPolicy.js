import {
  AiOutlineLock as PrivacyPolicyIcon,
} from 'react-icons/ai'

export default {
  name: 'privacyPolicy',
  type: 'document',
  icon: PrivacyPolicyIcon,
  fields: [
    {
      name: 'privacyPolicyTitle',
      type: 'string',
    },
    {
      name: 'privacyPolicyText',
      type: 'richText',
    },
  ]
}

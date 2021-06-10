import {
  RiQuestionAnswerLine as FAQsIcon,
} from 'react-icons/ri'

export default {
  title: 'FAQs',
  name: 'FAQs',
  type: 'document',
  icon: FAQsIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'questions',
      type: 'array',
      of: [
        {
          title: 'question',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'body',
              type: 'richText',
            },
          ]
        }
      ],
    },
  ]
}

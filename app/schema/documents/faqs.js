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
      title: 'FAQs Title',
      name: 'FAQsTitle',
      type: 'string',
    },
    {
      name: 'questions',
      type: 'array',
      of: [
        {
          name: 'Question',
          title: 'question',
          type: 'object',
          fields: [
            {
              name: 'questionTitle',
              type: 'string',
            },
            {
              name: 'questionBody',
              type: 'richText',
            },
          ]
        }
      ],
    },
  ]
}

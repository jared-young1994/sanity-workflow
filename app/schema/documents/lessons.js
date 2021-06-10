import {
  ImClipboard as LessonsIcon,
} from 'react-icons/im'

export default {
  name: 'lessons',
  type: 'document',
  icon: LessonsIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'summary',
      type: 'string',
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
      name: 'introductionButton',
      type: 'navigationButton',
    },

    {
      name: 'lessonSteps',
      type: 'array',
      of: [
        {
          name: 'lessonStep',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
            },            
            {
              name: 'icon',
              type: 'iconPicker',
            },            
            {
              name: 'text',
              type: 'text',
            },
          ]
        }
      ]
    },

    // explore lesson card fields
    {
      name: 'lessonType',
      type: 'string',
    },
    {
      name: 'lessonCardImage',
      type: 'image',
    },
    {
      name: 'lessonCardLink',
      type: 'navigationButton',
    },
  ]
}

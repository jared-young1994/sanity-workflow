import {
  ImClipboard as LessonsIcon,
} from 'react-icons/im'

export default {
  name: 'lessons',
  type: 'document',
  icon: LessonsIcon,
  fields: [
    {
      name: 'lessonTitle',
      type: 'string',
    },
    {
      name: 'lessonSummary',
      type: 'string',
    },
    {
      name: 'lessonImage',
      type: 'image',
    },
    {
      name: 'lessonLink',
      type: 'navigationButton',
    },
    {
      name: 'lessonIntroduction',
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
              name: 'stepTitle',
              type: 'string',
            },            
            {
              name: 'stepIcon',
              type: 'iconPicker',
            },            
            {
              name: 'stepText',
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

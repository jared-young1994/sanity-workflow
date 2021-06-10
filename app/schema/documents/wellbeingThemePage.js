import {
  AiOutlineHeart as wellbeingThemePageIcon,
} from 'react-icons/ai'

export default {
  name: 'wellbeingThemePage',
  type: 'document',
  icon: wellbeingThemePageIcon,
  fields: [
    {
      name: 'pageName',
      type: 'string',
    },
    {
      name: 'heroTitle',
      type: 'string',
    },
    {
      name: 'heroText',
      type: 'text',
    },
    {
      name: 'heroImage',
      type: 'image',
    },
    {
      name: 'heroButton',
      type: 'navigationButton',
    },

    {
      name: 'caption1SubTitle',
      type: 'string',
    },
    {
      name: 'caption1Title',
      type: 'string',
    },
    {
      name: 'caption1Text',
      type: 'text',
    },

    {
      name: 'symptomSubTitle',
      type: 'string',
    },
    {
      name: 'symptoms',
      type: 'array',
      of: [{ type: 'imageCard', name: 'symptom', title: 'Symptom' }],
    },
    {
      name: 'symptomTagLine',
      type: 'string',
    },
    {
      name: 'symptomButton',
      type: 'navigationButton',
    },

    {
      name: 'contentBlock',
      type: 'imageTextBlock',
    },

    {
      name: 'lessonSubTitle',
      type: 'string',
    },
    {
      name: 'lessonCards',
      type: 'array',
      of: [{ type: 'imageLinkCard', name: 'lessonCard', title: 'Lesson Card' }],
    },
  ], 

  preview: {
    select: {
      title: 'pageName',
      media: 'heroImage'
    }
  }
}

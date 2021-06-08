import {
  AiOutlineHeart as wellbeingThemePageIcon,
} from 'react-icons/ai'

export default {
  name: 'wellbeingThemePage',
  type: 'document',
  icon: wellbeingThemePageIcon,
  fields: [
    {
      name: 'wellbeingThemeTitle',
      type: 'string',
    },
    {
      name: 'wellbeingThemeText',
      type: 'text',
    },
    {
      name: 'wellbeingThemeImage',
      type: 'image',
    },
    {
      name: 'wellbeingThemeButton',
      type: 'navigationButton',
    },

    {
      name: 'caption1Subtitle',
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
      name: 'symptomSubtitle',
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
      name: 'lessonSubtitle',
      type: 'string',
    },
    {
      name: 'lessonCards',
      type: 'array',
      of: [{ type: 'imageLinkCard', name: 'lessonCard', title: 'Lesson Card' }],
    },
  ]
}

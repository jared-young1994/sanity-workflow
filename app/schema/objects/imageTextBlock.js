export default {
  name: 'imageTextBlock',
  type: 'object',
  fields: [
    {
      name: 'textBlock',
      type: 'textBlock',
    },
    {
      name: 'image',
      type: 'image',
    },
  ],

  preview: {
    select: {
      title: 'textBlock.textBlockTitle',
      media: 'image'
    }
  }
}

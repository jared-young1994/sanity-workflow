export default {
  name: 'imageLinkCard',
  type: 'object',
  fields: [
    {
      name: 'imageCard',
      type: 'imageCard',
    },
    {
      name: 'cardButton',
      type: 'navigationButton',
    }
  ],

  preview: {
    select: {
      title: 'imageCard.cardTitle',
      media: 'imageCard.cardImage'
    }
  }
}

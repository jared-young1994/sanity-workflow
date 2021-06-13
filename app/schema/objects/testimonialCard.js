export default {
  name: 'testimonialCard',
  type: 'object',
  fields: [
    {
      name: 'person',
      type: 'personCard',
    },
    {
      name: 'statement',
      type: 'richText',
    },
  ]
}

import {
  GrUser as AuthorIcon,
} from 'react-icons/gr'

export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  icon: AuthorIcon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      type: 'image',
      name: 'image',
      options: {
        hotspot: true
      },
    },
    {
      type: 'richText',
      name: 'bio',
      // Only want the bio to be localized in this case
      localize: true
    }
  ],
}

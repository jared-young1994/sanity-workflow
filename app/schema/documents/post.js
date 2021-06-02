import { i18n } from '../documentTranslation'
import {
  GrArticle as ArticleIcon
} from 'react-icons/gr'


export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: ArticleIcon,
  // The next property enables full-document translation for this document
  // via the sanity-intl plugin. You can of course modify this object should you
  // need to on a document-to-document bassis.
  i18n,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {type: 'datetime', name: 'publishedAt', title: 'Published at'},

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'captionImage',
      options: {
        hotspot: true
      },
    },
    {
      title: 'Body',
      name: 'body',
      type: 'richText'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}

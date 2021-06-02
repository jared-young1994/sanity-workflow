import S from '@sanity/desk-tool/structure-builder'
import * as I18nS from 'sanity-plugin-intl-input/lib/structure'
import {i18n} from './schema/documentTranslation'
import * as Structure from 'sanity-plugin-intl-input/lib/structure';


export const getDefaultDocumentNode = props => {
  if (props.schemaType === 'post') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType))
  }
  return S.document()
}

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Post')
        .id('post-docs')
        .schemaType('post')
        .child(
          S.documentList()
            .id('post')
            .title('Posts')
            // Use a GROQ filter to get documents.
            .filter('_type == "post" && (!defined(_lang) || _lang == $baseLang)')
            .params({baseLang: i18n.base})
            .canHandleIntent((_name, params, _context) => {
              // Assume we can handle all intents (actions) regarding post documents
              return params.type === 'post'
            })
        ),
        ...Structure.getFilteredDocumentTypeListItems().filter(
          (l) => !['post','workflow.metadata'].includes(l.getId())
        ),
    ])

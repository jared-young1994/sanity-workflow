import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import workflow types
import workflowMetadata from './workflow/metadata'
import author from './documents/author'
import post from './documents/post'

import richText from './objects/richText'
import openGraph from './objects/openGraph'
import captionImage from './objects/captionImage'


export default createSchema({
  name: 'demo-review-workflow',
  types: schemaTypes.concat([richText,
    openGraph,
    captionImage,
    author, 
    post, 
    workflowMetadata])
})

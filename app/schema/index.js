import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import workflow types
import workflowMetadata from './workflow/metadata'
import author from './documents/author'
import post from './documents/post'
import homePage from './documents/homePage'

import richText from './objects/richText'
import openGraph from './objects/openGraph'
import captionImage from './objects/captionImage'
import navigationButton from './objects/navigationButton'
import imageCard from './objects/imageCard'

export default createSchema({
  name: 'demo-review-workflow',
  types: schemaTypes.concat([richText,
    openGraph,
    captionImage,
    navigationButton,
    imageCard,
    author, 
    post, 
    homePage,
    workflowMetadata])
})

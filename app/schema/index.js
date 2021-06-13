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
import imageLinkCard from './objects/imageLinkCard'
import howItWorks from './documents/howItWorks'
import imageCard from './objects/imageCard'
import textBlock from './objects/textBlock'
import imageTextBlock from './objects/imageTextBlock'
import wellbeingThemePage from './documents/wellbeingThemePage'
import getClearhead from './documents/getClearhead'
import clients from './documents/clients'
import faqs from './documents/faqs'
import aboutUs from './documents/aboutUs'
import privacyPolicy from './documents/privacyPolicy'
import lessons from './documents/lessons'
import therapists from './documents/therapists'
import testimonialCard from './objects/testimonialCard'
import personCard from './objects/personCard'


export default createSchema({
  name: 'demo-review-workflow',
  types: schemaTypes.concat([
    author,
    post,
    openGraph,
    captionImage,
    workflowMetadata,

    richText,
    navigationButton,
    imageLinkCard,
    imageCard,
    textBlock,
    imageTextBlock,
    testimonialCard,
    personCard,

    homePage,
    howItWorks,
    wellbeingThemePage,
    getClearhead,
    clients,
    faqs,
    aboutUs,
    privacyPolicy,
    lessons,
    therapists,
  ])
})

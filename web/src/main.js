// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Import image url builder
import urlForImage from './utils/urlForImage'

// import VModal from 'vue-js-modal'


// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage
}




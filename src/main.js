// Import main css
import '~/assets/style/index.scss';
import VueScrollReveal from 'gridsome-scroll-reveal';


// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en', prefix: 'og: http://ogp.me/ns#'}

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueScrollReveal, {
    // applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    class: 'v-scroll-reveal',
    duration: 1000,
    scale: 1.5,
    distance: '5px',
    mobile: true
  });
}

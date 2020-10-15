// Import main css
import '~/assets/style/index.scss';

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en', prefix: 'og: http://ogp.me/ns#', id: 'top' }

  // Global Head Metadata
  head.meta.push(
    {
      key: "author",
      name: "author",
      content: "Rokma"
    },
    { key: "robots", name: "robots", content: "index, follow, noodp, noydir" }
  )


  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

}

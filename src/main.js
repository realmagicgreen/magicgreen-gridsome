// Import main css
import '~/assets/style/index.scss';

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';
import config from '../gridsome.config'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en', prefix: 'og: http://ogp.me/ns#', id: 'top' }

  //https://github.com/threenine/geekiam/blob/master/src/main.js
  let copyRightNotice = `\u00a9 ${
        config.siteAuthor
    }, ${new Date().getFullYear()}. Released under CC_BY license.`


    head.meta.push(
      //general
      {
        key: 'keywords',
        name: 'keywords',
        content: config.siteKeywords
      },
      {
        name: 'author',
        content: config.siteAuthor
      },
      {
        key: 'description',
        name: 'description',
        content: config.siteDescription
      },
      {
        name: 'copyright',
        content: copyRightNotice
      },
      //og
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Feeding the green baby | ' + config.siteName
      },
      {
        key: 'og:image',
        property: 'og:image',
        content: config.siteImage
      },
      {
        key: 'og:image:width',
        property: 'og:image:width',
        content: '1200px'
      },
      {
        key: 'og:image:height',
        property: 'og:image:height',
        content: '630px'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: config.siteName
      },
      //robots
      {
        key: "robots",
        name: "robots",
        content: "index, follow, noodp, noydir"
      },
      //twitter
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: 'Feeding the green baby | ' + config.siteName
      },
      {
        key: "twitter:image",
        name: "twitter:image",
        content: config.siteImage
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content: config.siteDescription
      }
    ),

    head.link.push({
      rel: 'sitemap',
      type: 'application/xml',
      title: 'Sitemap',
      href: `${config.siteUrl}/sitemap.xml`,
    })


  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

}

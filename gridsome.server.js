// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Requires restart: CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({addCollection, addMetadata}) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('settings', require('./gridsome.config').settings);
  });


  api.createPages(({ createPage }) => {
    createPage({
      path: '/resources',
      component: './src/pages/Resources.vue',
      context: {
        title: 'Resources',
        subTitle: 'Browse through our list of green resources.',
        description: 'To solve big problems we need resources. These organisations are doing the right thing and can help. Make a wise choice and support them.'
      }
    })
  });

  api.createPages(({ createPage }) => {
    createPage({
      path: '/about',
      component: './src/pages/About.vue',
      context: {
        title: 'About',
        subTitle: 'Working towards a necessary future.',
        description: 'We are a network of communication professionals. We feel the need to make something meaningful and necessary, to push the world towards the right direction.',
        cover_image: '~/assets/p/about/about.jpg',
        photography: 'Rokma'
      }
    })
  })
}

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({addCollection, addMetadata}) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('settings', require('./gridsome.config').settings);
  });

  api.loadSource(async store => {
    store.addMetadata('slogan', 'Sustainable and environment-friendly examples from South East Asia and beyond.')
  });
  // api.loadSource(actions => {
  //   const collection = actions.addCollection('MyData')
  //
  //   collection.addNode({
  //     title: 'Lorem ipsum dolor sit amet.',
  //     customField: '...'
  //   })
  // })
  api.loadSource(({ addCollection }) => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api/
  })
}

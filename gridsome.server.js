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
    store.addMetadata('slogan', 'Sustainable and environment-friendly examples from South East Asia and beyond.'),
    store.addMetadata('slogan_services', 'Services to lower your environmental impact.'),
    store.addMetadata('slogan_products', 'Sometimes it\'s easy to stop buying polluting products and start supporting more sustainable ones.'),
    store.addMetadata('slogan_techniques', 'The way to sustainable living explained in details.'),
    store.addMetadata('slogan_solutions', 'Small or big, here are some solutions to environmental problems.'),
    store.addMetadata('slogan_know', 'Did you know that... hum, actually i didn\t. thanks for letting me know!'),
    store.addMetadata('slogan_health', 'How to improve your life. food, plants medicines, healthy living, superfoods.'),
    store.addMetadata('slogan_resources', 'to solve big problems we need resources. these organisations are doing the right thing and can help. make a wise choice and support them.')
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

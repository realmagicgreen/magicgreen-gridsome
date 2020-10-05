// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Magic Green',
  siteDescription: 'Magic Green magazine is a showcase of examples, infos and addresses of all stuff green from South East Asia and beyond.',
  siteUrl: 'https://magicgreensome.netlify.app',
  titleTemplate: `%s | MagicGreen`,

  //// https://gridsome.org/docs/assets-svg/#using-svgs-as-components
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader')
      .loader('vue-svg-loader')
  },

// testing
settings: {
// Place site-wide settings here and query them from the GraphQL layer's metadata {settings} key.
  slogans: {
    home: 'Sustainable and environment-friendly examples from South East Asia and beyond.',
    services: 'Services to lower your environmental impact.',
    products: 'Sometimes it\'s easy to stop buying polluting products and start supporting more sustainable ones.',
    techniques: 'The way to sustainable living explained in details.',
    solutions: 'Small or big, here are some solutions to environmental problems.',
    know: 'Did you know that... hum, actually i didn\t. thanks for letting me know!',
    health: 'How to improve your life. food, plants medicines, healthy living, superfoods.',
    esources: 'to solve big problems we need resources. these organisations are doing the right thing and can help. make a wise choice and support them.'
  //      frameworks: [
  //        'Vue',
  //        'Gridsome',
  //        'Tailwind'
  //      ]
     }
  },


  plugins: [
    // {
    //   use: 'gridsome-plugin-svg',
    //   // options: {
    //   //  goesBothWays: true, //default false
    //   // }
    // },
    {
      // Create pages with Vue components in Markdown.
      // Perfect for building Documentation, Design Systems, Portfolios, Blogs, etc.
      // https://gridsome.org/plugins/@gridsome/vue-remark
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Blah', // Required
        baseDir: './content/blah', // Where .md files are located
        pathPrefix: 'blah',
        template: './src/templates/Blah.vue' // Optional
      }
    },
    // {
    //   // Create pages with Vue components in Markdown.
    //   // Perfect for building Documentation, Design Systems, Portfolios, Blogs, etc.
    //   // https://gridsome.org/plugins/@gridsome/vue-remark
    //   use: '@gridsome/vue-remark',
    //   options: {
    //     typeName: 'Post', // Required
    //     baseDir: './content/posts', // Where .md files are located
    //     pathPrefix: '',
    //     template: './src/templates/Post.vue' // Optional
    //   }
    // },
    {
      // critical css
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      // use yaml files
      use: '@gridsome/source-filesystem',
      options: {
          path: 'component/site/*.yml',
          typeName: 'Yaml',
          yamljson: {
            plugins: [
              // ...local plugins
            ]
          }
        }
    },
    {
      // sitemap
      use: '@gridsome/plugin-sitemap'
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          },
          // Creates a GraphQL collection from 'category' in front-matter and adds a reference.
          category: {
            typeName: 'Category',
            create: true
          },
            // Creates a GraphQL collection from 'extlinks' in front-matter and adds a reference.
            extlinks: {
              typeName: 'ExtLinks',
              create: true
          }
        }
      }
    },
    {
      // Create pages from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'CustomPage',
        baseDir: './content/pages',
        path: '*.md'
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'content/site/*.json'
      }
    }
  ],

  templates: {
    Post: [{
      path: '/:category/:title',
      component: '~/templates/Post.vue'
    }],
    CustomPage: [{
      path: '/:title',
      component: '~/templates/CustomPage.vue'
    }],
    Category: [{
      path: '/:title',
      component: '~/templates/Category.vue'
    }],
    Tag: [{
      path: '/:title',
      component: '~/templates/Tag.vue'
    }]
  },

  transformers: {
    yamljson:{},
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon_link',
      plugins: [
        '@gridsome/remark-prismjs',
        // Add remark-unwrap-images plugin
				'gridsome-remark-unwrap-images'
      ]
    }
  }
}

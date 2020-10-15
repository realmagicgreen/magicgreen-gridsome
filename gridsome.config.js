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
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },

// testing
  settings: {
    // Place site-wide settings here + query 'em from GraphQL layer's metadata {settings} key.
    slogans: {
      home: 'Sustainable and environment-friendly examples from South East Asia and beyond.',
      services: 'Services to lower your environmental impact.',
      products: 'Sometimes it\'s easy to stop buying polluting products and start supporting more sustainable ones.',
      techniques: 'The way to sustainable living explained in details.',
      solutions: 'Small or big, here are some solutions to environmental problems.',
      know: 'Did you know that... Hum, actually I didn\'t. Thanks for letting me know!',
      health: 'How to improve your life. Food, plants medicines, healthy living, superfoods.',
      resources: 'To solve big problems we need resources. These organisations are doing the right thing and can help. Make a wise choice and support them.'
    },
    nav: {
      links: [
        { path: '/services/', title: 'services' },
        { path: '/products/', title: 'products' },
        { path: '/techniques/', title: 'techniques' },
        { path: '/solutions/', title: 'solutions' },
        { path: '/know/', title: 'know' },
        { path: '/health/', title: 'health' },
        { path: '/resources/', title: 'resources' }
      ]
    }
  },

  plugins: [

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
          }
        }
      }
    },
    {
      // Create pages from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Resources',
        path: 'content/resources/resources.md'
      }
    },
    {
      // Create pages from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'AboutPage',
        path: 'content/about/*.md'
      }
    }
  ],

  templates: {
    Post: [{
      path: '/:category/:title',
      component: '~/templates/Post.vue'
    }],
    Resources: [{
      path: '/:title',
      component: '~/templates/Resources.vue'
    }],
    AboutPage: [{
      path: '/:title',
      component: '~/templates/AboutPage.vue'
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

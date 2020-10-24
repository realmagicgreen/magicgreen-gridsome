// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Magic Green',
  siteDescription: 'Magic Green showcase examples, infos and addresses of all stuff green. Sustainable and environment-friendly examples from South East Asia and beyond.',
  siteUrl: 'https://greensome.netlify.app',
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
    nav: {
      links: [
        {
          title: 'services',
          subtitle: 'Services to lower your environmental impact.',
          path: '/services/'
        },
        {
          title: 'products',
          subtitle: 'Sometimes it\'s easy to stop buying polluting products and start supporting more sustainable ones.',
          path: '/products/'
        },
        {
          title: 'techniques',
          subtitle: 'The way to sustainable living explained in details.',
          path: '/techniques/'
        },
        {
          title: 'solutions',
          subtitle: 'Small or big, here are some solutions to environmental problems.',
          path: '/solutions/'
        },
        {
          title: 'know',
          subtitle: 'Did you know that... Hum, actually I didn\'t. Thanks for letting me know!',
          path: '/know/'
        },
        {
          title: 'health',
          subtitle: 'How to improve your life. Food, plants medicines, healthy living, superfoods.',
          path: '/health/'
        },
        {
          title: 'resources',
          subtitle: 'To solve big problems we need resources. These organisations are doing the right thing and can help. Make a wise choice and support them.',
          path: '/resources/'
        }
      ]
    }
  },

  plugins: [

    {
      // Create pages with Vue components in Markdown.
      // Perfect for building Documentation, Design Systems, Portfolios, Blogs, etc.
      // https://gridsome.org/plugins/@gridsome/vue-remark
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'About', // Required
        baseDir: './content/otherpages/about/', // Where .md files are located
        pathPrefix: '',
        template: './src/templates/About.vue' // Optional
      }
    },
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
    }
  ],

  templates: {
    Category: [{
      path: '/:title',
      component: '~/templates/Category.vue'
    }],
    Tag: [{
      path: '/:title',
      component: '~/templates/Tag.vue'
    }],
    Post: [{
      path: '/:category/:title',
      component: '~/templates/Post.vue'
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

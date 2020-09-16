// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Magic Green',
  siteDescription: 'Magic Green magazine is a showcase of examples, infos and addresses of all stuff green from South East Asia and beyond.',
  siteUrl: 'https://magicgreensome.netlify.app',

  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
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
      path: '/:category/:title'
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
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs',
        // Add remark-unwrap-images plugin
				'gridsome-remark-unwrap-images'
      ]
    }
  }
}

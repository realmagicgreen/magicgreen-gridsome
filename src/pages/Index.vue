<template>
  <Layout>

    <SEOhome/>

    <div class="horizontal_spacing">

      <div class="posts post_grid">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>

    </div>

    <Pager :info="$page.posts.pageInfo" class="pagination_block center"/>

    <TagCloud />

  </Layout>
</template>

<page-query>
  query ($page: Int){
  tags: allTag(sortBy: "title", order: ASC) {
    totalCount
    edges {
      node {
        title
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
  links: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        ad
        path
      }
    }
  }
  posts: allPost(filter: { published: { eq: true }} perPage: 6, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        subtitle
        category {
          title
        }
        date (format: "DD MMMM YYYY")
        timeToRead
        description
        ad
        cover_image (width: 1015, quality: 33, blur: 40)
        ...on Post {
        id
        title
        path
        }
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
  metadata {
    siteName
		siteDescription
    settings {
      SEOimage
      nav {
        links {
          path
          title
          subtitle
        }
      }
    }
  }
}
</page-query>


<script>
  import PostCard from '~/components/PostCard.vue'
  import TagCloud from '~/components/TagCloud.vue'
  import SEOhome from '~/components/SEOhome.vue'
  import { Pager } from 'gridsome'

  export default {
    components: {
      PostCard,
      TagCloud,
      Pager,
      SEOhome
    },
    metaInfo () {
      return {
        title: this.$page.metadata.siteName,
        meta: [
          {
            key: 'description',
            name: 'description',
            content: 'uuuuu'
          }
        ],
        bodyAttrs: {
            class: 'page_home'
        }
      }
    }
  }
</script>

<style lang="scss">
  .page_home {

    .site_description {
      display: block;
      max-width: 80vw;
      margin: 0 auto;
      height: fit-content;
      color: var(--title_color);
      line-height: 1.2;
      text-align: center;
      color: white;
    }
  }

</style>

<style lang="scss" scoped>

</style>

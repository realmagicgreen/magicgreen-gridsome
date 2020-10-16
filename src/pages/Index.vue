<template>
  <Layout :slogan_home="true">

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
    settings {
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
import { Pager } from 'gridsome'

export default {
  components: {
    PostCard,
    TagCloud,
    Pager
  },
  metaInfo: {
    title: 'Hello, greener world!',
    bodyAttrs: {
        class: 'page_home'
    }
  }
}
</script>

<style lang="scss" scoped>
  .posts {
    padding: 10px;
  }
</style>

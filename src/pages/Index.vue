<template>
  <Layout>

    <div class="horizontal_spacing">

      <div class="slogan_block">
        <Slogan />
      </div>

      <div class="posts post_grid">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>

      <Pager :info="$page.posts.pageInfo" class="pagination_block center"/>

    </div>

    <div class="vertical_spacing border_brand_top">

      <!-- tagCloudBlock -->
      <div class="tag_cloud">
        <div class="tag_block_icon"></div>
        <div class="links_list" role="menu">
          <TagLink
          v-for="edge in $page.tags.edges"
          :key="edge.node.id"
          :tag="edge.node"
          />
        </div>
      </div>
      <!-- /tagCloudBlock -->

    </div>

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
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import Slogan from '~/components/Slogan.vue'
import TagLink from '~/components/TagLink.vue'
import { Pager } from 'gridsome'

export default {
  components: {
    PostCard,
    Slogan,
    TagLink,
    Pager
  },
  metaInfo: {
    title: 'Hello, greener world!'
  }
}
</script>

<style lang="scss" scoped>
  .posts {
    padding: 10px;
  }
</style>

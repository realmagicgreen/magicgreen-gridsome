<template>
  <Layout :show-logo="true">



    <div class="slogan_block container">
      <Slogan />
    </div>

    <div class="posts post_grid">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

    <Pager :info="$page.posts.pageInfo" class="pagination_block center"/>

    <div class="tag_cloud container">
      <div class="tag_icon">

      </div>
      <div class="links_list">
        <TagLink
        v-for="edge in $page.tags.edges"
        :key="edge.node.id"
        :tag="edge.node"
        />
      </div>
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
  posts: allPost(filter: { published: { eq: true }} perPage: 3, page: $page) @paginate {
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
  .links_list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

  }
  .tag_cloud.container {
    background-color: var(--tag_page_bg_color);
    max-width: none;
  }
  .tag_link {
    padding: 5px;
    margin: 0 2px;
    text-decoration: none;
    color: var(--link_color);
    :hover {
      color: var(--link_color_hover);
    }
  }

</style>

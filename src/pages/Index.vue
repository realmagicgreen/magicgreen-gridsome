<template>
  <Layout :show-logo="true">



    <div class="slogan_block container">
      <Slogan />
    </div>

    <div class="posts post_grid">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

    <Pager :info="$page.posts.pageInfo" class="pagination_block center"/>

    <!-- tagCloudBlock -->
    <div class="tag_cloud container">
      <div class="tag_block_icon">
        <!-- <svg class="tagcloud_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bbff80" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line  stroke-width="1.5" x1="7" y1="7" x2="7.01" y2="7"></line></svg> -->
      </div>
      <div class="links_list" role="menu">
        <TagLink
        v-for="edge in $page.tags.edges"
        :key="edge.node.id"
        :tag="edge.node"
        />
      </div>
    </div>
    <!-- /tagCloudBlock -->

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
  .tag_cloud.container {
    a {
      body[data-theme="light"] & {
        color: black;
      }
    }
  }

  .tag_block_icon {
  	min-height: 80px;
    width: 80px;
    display: flex;
  	align-items: center;
    justify-content: center;
    &:before {
      content: "";

      width: 80px;
      height: 80px;
      position: absolute;
      left: calc(50% - 40px);
      [data-theme="light"] & {
        background: url("../assets/svgs/tagcloud.svg") no-repeat;
  		}

  		[data-theme="dark"] & {
        background: url("../assets/svgs/tagcloud_green.svg") no-repeat;
  		}
    }
  }
</style>

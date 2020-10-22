<template>
  <Layout :show-logo="true">
    <div class="horizontal_spacing" :class="[$page.category.title]">

      <h1 class="category_title center">
        {{ $page.category.title }}
      </h1>

      <div class="posts post_grid">
        <PostCard v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
      </div>

      <!-- <Pager :info="$page.category.pageInfo" class="pagination_block center"/> -->
    </div>

    <TagCloud />

  </Layout>
</template>

<page-query>
query Category ($id: ID!) {
  category (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            subtitle
            path
            ad
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
            cover_image (width: 860, blur: 10)
            category {
              title
            }
          }
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
  posts: allPost {
		edges {
			node {
				id
				title
				...on Post {
				id
				title
				path
				}
			}
		}
	}
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
import { Pager } from 'gridsome'
import TagCloud from '~/components/TagCloud.vue'

export default {
  components: {
    PostCard,
    Pager,
    TagCloud
  },
  metaInfo () {
    return {
      title: this.$page.category.title,
      bodyAttrs: {
          class: 'category_page--' + this.$page.category.title
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  // all about .post in post.scss so to have one source of truth...
  .post_grid {
    padding-top: 50vw;
    @media only screen and (min-width: 640px) {
      padding-top: 40vw;
    }
    @media only screen and (min-width: 720px) {
      padding-top: 30vw;
    }
    @media only screen and (min-width: 880px) {
      padding-top: 20vw;
    }
    @media only screen and (min-width: 1024px) {
      padding-top: 15vw;
    }
    @media only screen and (min-width: 1280px) {
      padding-top: 10vw;
    }
  }
  .category_title {
    @media only screen and (min-width: 881px) {
      display: none;
    }
  }
</style>

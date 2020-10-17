<template>
  <Layout :show-logo="true">
    <div class="horizontal_spacing" :class="[$page.category.title]">

      <h1 class="show_on_phones center">
        {{ $page.category.title }}
      </h1>

      <div class="posts post_grid">
        <PostCard v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
      </div>

      <TagCloud />

      <!-- <Pager :info="$page.category.pageInfo" class="pagination_block center"/> -->
    </div>
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
  padding-top: 30vh;
  @media only screen and (min-width: 640px) {
    padding-top: 20vh;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 10vh;
  }
}
</style>

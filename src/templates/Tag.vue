<template>
  <Layout>
    <h1 class="tag-title center margin_bottom">
      {{ $page.tag.title }}
    </h1>

    <div class="posts post_grid">
      <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            subtitle
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            tags {
              id
              title
              path
            }
            description
            content
            cover_image (width: 860, blur: 10)
          }
        }
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
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Tags'
  }
}
</script>

<style lang="scss" scoped>
.posts {
  padding: 10px;
}
</style>

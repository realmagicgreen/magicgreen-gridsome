<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      {{ $page.category.title }}
    </h1>

    <div class="posts">
      <PostCard v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
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
            date (format: "D. MMMM YYYY")
            timeToRead
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
    title: 'category'
  }
}
</script>

<style lang="scss">

</style>

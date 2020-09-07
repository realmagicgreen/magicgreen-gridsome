<template>
  <Layout :show-logo="true">

    <div class="slogan">

    </div>

    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        subtitle
        date (format: "DD MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
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
import Header from '~/components/Header.vue'
import PostCard from '~/components/PostCard.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    PostCard,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.posts {
  padding: 10px;
}
</style>

<template>
  <Layout :show-logo="true">

    <div class="slogan_block">
      <Slogan />
    </div>

    <TagLink
    v-for="edge in $page.tags.edges"
    :key="edge.node.id"
    :tag="edge.node"
    />

    <div class="posts post_grid">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  tags: allTag {
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
  posts: allPost(filter: { published: { eq: true }}) {
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

export default {
  components: {
    PostCard,
    Slogan,
    TagLink
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

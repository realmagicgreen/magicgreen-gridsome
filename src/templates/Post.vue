<template>
  <Layout>

    <SEO/>

    <div class="post_image" :class="[$page.post.category.title]">
      <g-image
      alt="Cover image"
      v-if="$page.post.cover_image"
      :src="$page.post.cover_image"
      class="post_cover_image"/>

      <div class="category">
        {{ $page.post.category.title }}
      </div>
    </div>

    <div class="post_container">

      <div class="post_header">

        <h1 class="post_title" :class="[$page.post.ad ? 'is-adv' : '' ]" >
          {{ $page.post.title }}
        </h1>

        <h2 class="post_subtitle border_top border_bottom">
          {{ $page.post.subtitle }}
        </h2>

        <PostMeta :post="$page.post" />

      </div>

      <div class="post_content" v-html="$page.post.content" />

    </div>

  </Layout>
</template>


<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    subtitle
    category {
      title
    }
    path
    date (format: "DD MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    photography
    ad
    content
    cover_image (width: 1920)
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
import PostMeta from '~/components/PostMeta'
import PostLink from '~/components/PostLink'
import SEO from '~/components/SEO.vue'

export default {
  components: {
    PostMeta,
    PostLink,
    SEO
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      subtitle: this.$page.post.subtitle,
      ad: this.$page.post.ad
      // meta: [
      //   {
      //     name: 'description',
      //     content: this.$page.post.description
      //   }
      // ]
    }
  }
}
</script>


<style lang="scss" scoped>
// in post.scss so to have one source of truth...
</style>

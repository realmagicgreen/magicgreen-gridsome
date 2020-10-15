<template>
  <Layout :show-logo="true">

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

    <div class="horizontal_spacing">



      <div class="post_horizontal_spacing">

        <div class="post_header">

          <h1 class="post_title vertical_spacing" :class="[$page.post.ad ? 'is-adv' : '' ]" >
            {{ $page.post.title }}
          </h1>

          <h2 class="post_subtitle border_top border_bottom">
            {{ $page.post.subtitle }}
          </h2>

          <PostMeta :post="$page.post" />

        </div>

        <div class="post_content" v-html="$page.post.content" />

      </div>

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
}
</page-query>

<script>
import PostMeta from '~/components/PostMeta'
import SEO from '~/components/SEO.vue'

export default {
  components: {
    PostMeta,
    SEO
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      subtitle: this.$page.post.subtitle,
      ad: this.$page.post.ad,
      bodyAttrs: {
          class: 'page_post'
      }
    }
  },
  mounted () {
    import('medium-zoom').then(mediumZoom => {
      this.zoom = mediumZoom.default(
        '.post_content .g-image',
        { background: 'var(--bg_color)' }
      )
    })
  }
}
</script>


<style lang="scss" scoped>
// in post.scss so to have one source of truth...
</style>

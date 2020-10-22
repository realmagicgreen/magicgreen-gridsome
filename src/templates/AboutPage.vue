<template>
  <Layout :show-logo="true">

    <SEO/>

    <div class="post_image">

      <g-image
      alt="Cover image"
      v-if="$page.entry.cover_image"
      :src="$page.entry.cover_image"
      class="post_cover_image"
      />

    </div>

    <div class="horizontal_spacing">

      <div class="post_horizontal_spacing">

        <div class="post_header">

          <h1 class="page_title">
            {{ $page.entry.title }}
          </h1>

          <h2 class="post_subtitle border_top border_bottom">
            {{ $page.entry.subtitle }}
          </h2>

        </div>

        <div class="post_content" v-html="$page.entry.content" />

      </div>

    </div>

  </Layout>
</template>

<page-query>
query AboutPage ($id: ID!) {
  entry: aboutPage (id: $id) {
    title
    subtitle
    description
    cover_image
    content
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
  import SEO from '~/components/SEO.vue'

  export default {
    components: {
      SEO
    },
    metaInfo () {
      return {
        title: this.$page.entry.title,
        subtitle: this.$page.post.subtitle,
        description: this.$page.post.description,
        bodyAttrs: {
            class: 'page_about_us'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
// in post.scss so to have one source of truth...
</style>

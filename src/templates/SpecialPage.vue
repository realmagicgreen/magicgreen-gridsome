<template>
  <Layout :show-logo="true">

    <div class="horizontal_spacing">

      <g-image
      alt="Cover image"
      v-if="$page.entry.cover_image"
      :src="$page.entry.cover_image"
      class="post_cover_image"
      />

      <div class="post_horizontal_spacing">

        <div class="post_header">

          <h1 class="post_title">
            {{ $page.entry.title }}
          </h1>

          <h2 class="post_subtitle border_top border_bottom" v-if="$page.entry.subtitle">
            {{ $page.entry.subtitle }}
          </h2>

        </div>

        <div class="post_content" v-html="$page.entry.content" />

      </div>

    </div>

  </Layout>
</template>

<page-query>
query SpecialPage ($id: ID!) {
  entry: specialPage (id: $id) {
    title
    subtitle
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
export default {
  metaInfo () {
    return {
      title: this.$page.entry.title,
      bodyAttrs: {
          class: 'page_special_page'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// in post.scss so to have one source of truth...
</style>

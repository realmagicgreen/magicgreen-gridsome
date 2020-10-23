<template>
  <Layout :show-logo="true">

    <div class="post_image">

      <g-image
      alt="Cover image"
      v-if="$context.cover_image"
      :src="$context.cover_image"
      class="post_cover_image"
      />

    </div>

    <div class="horizontal_spacing">

      <div class="post_horizontal_spacing">

        <div class="post_header">

          <h1 class="page_title">
            {{ $context.title }}
          </h1>

          <h2 class="post_subtitle border_top border_bottom">
            {{ $context.subTitle }}
          </h2>

        </div>

        <div class="post_content" v-html="$context.content" />

      </div>

    </div>

  </Layout>
</template>

<page-query>
  query {
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
  }
</page-query>

<script>

  export default {
    metaInfo () {
      return {
        title: this.$context.title,
        subtitle: this.$context.subtitle,
        meta: [
          {
            key: 'description',
            name: 'description',
            content: 'MagicGreen. A network of communication professionals feeling the need to make something meaningful & necessary, to push the world towards the right direction.'
          }
        ],
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

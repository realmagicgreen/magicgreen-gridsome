<template>
  <Layout :show-logo="true">

    <div class="post_image cover_image">

      <g-image
      :alt="$page.about.photographer"
      v-if="$page.about.cover_image"
      :src="$page.about.cover_image"
      :title="$page.about.photography"
      class="post_cover_image"
      />
      <div class="caption right">
        <IcoPhotographer class="small_icon"/>
        {{$page.about.photography}}
      </div>

    </div>

    <div class="horizontal_spacing">

      <div class="post_horizontal_spacing">

        <div class="post_header">

          <h1 class="page_title">
            {{ $page.about.title }}
          </h1>

          <h2 class="post_subtitle border_top border_bottom">
            {{ $page.about.subtitle }}
          </h2>

        </div>

        <div class="post_content">
          <VueRemarkContent />
        </div>

      </div>

    </div>

  </Layout>
</template>

<page-query>
  query About ($id: ID!) {
    about(id: $id) {
      title
      subtitle
      description
      content
      cover_image
      photography
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
  }
</page-query>

<script>
 import IcoPhotographer from '~/assets/svgs/photographer.svg'

  export default {
    components: {
  		IcoPhotographer
    },

    metaInfo () {
      return {
        title: this.$page.about.title,
        subtitle: this.$page.about.subtitle,
        meta: [
          {
            name: 'description',
            content: this.$page.about.description
          }
        ],
        bodyAttrs: {
            class: 'page_about'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
// in post.scss so to have one source of truth...
</style>

<template>
    <g-link class="card content_box" :to="post.path">
      <div class="card_post_image clipped">
        <g-image
        class=""
        alt="Cover image"
        v-if="post.cover_image"
        :src="post.cover_image"/>
      </div>
      <div class="card_post_text">
        <h2 class="h1" v-html="post.title" />

        <PostAd class="card_ad" :post="post" v-if="post.ad" />

        <h3 class="border_top border_bottom" v-html="post.subtitle" />
        <p class="card_post_text_content" v-html="post.description" />

        <PostMeta class="card_meta" :post="post" />

      </div>
    </g-link>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostAd from '~/components/PostAd'
export default {
  components: {
    PostMeta,
    PostAd
  },
  props: ['post']
}
</script>

<style lang="scss">
// in card.scss, so tag and cat pages get it!
</style>

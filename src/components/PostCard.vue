<template>
  <g-link class="card" :to="post.path" :class="[post.category.title]" >

    <div class="category vertical-90 uppercase" v-html="post.category.title" />

    <div class="card_post_image clipped">
      <g-image
      width="1014"
      class="card_post_image--actually"
      alt="Cover image"
      v-if="post.cover_image"
      :src="post.cover_image"/>
    </div>

    <div class="card_post_text">
      <h2 class="h1" v-html="post.title" :class="[post.ad ? 'is-adv' : '' ]" />
      <h3 class="border_top border_bottom" v-html="post.subtitle" />

      <p class="card_post_text_content" v-html="post.description" />

      <div class="post_metas">
        <div class="post_meta_group left"></div>
        <div class="post_meta_group right">
          <div class="post_meta_item post_time_to_read" v-if="post.timeToRead">
            <IcoClock class="small_icon" />
            {{ post.timeToRead }} min read
          </div>
        </div>
      </div>

    </div>
  </g-link>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import IcoClock from '~/assets/svgs/clock.svg'

export default {
  components: {
    PostMeta,
    IcoClock
  },
  props: ['post']
}
</script>

<style lang="scss">
// in card.scss, so tag and cat pages get it!
</style>

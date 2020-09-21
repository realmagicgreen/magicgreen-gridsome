<template>
  <g-link class="card content_box" :to="post.path" :class="[post.category.title]" >

    <div class="category vertical uppercase" v-html="post.category.title" />

    <div class="card_post_image clipped">
      <g-image
      class=""
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="var(--text_color)"
              class="small_icon">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>{{ post.timeToRead }} min read
          </div>
        </div>
      </div>

    </div>
  </g-link>
</template>

<script>
import PostMeta from '~/components/PostMeta'
export default {
  components: {
    PostMeta
  },
  props: ['post']
}
</script>

<style lang="scss">
// in card.scss, so tag and cat pages get it!
</style>

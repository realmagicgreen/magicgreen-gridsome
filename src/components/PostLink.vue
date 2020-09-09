<template>

    <g-link class="menu_item post_link" :to="post.path">
      <div class="post-card__title" v-html="post.title" />
    </g-link>

</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">

</style>

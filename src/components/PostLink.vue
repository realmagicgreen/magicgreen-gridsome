<template>
  <div class="menu_item post_link" >
    <g-link class="" :to="post.path">
      <div class="post-card__title" v-html="post.title" />
    </g-link>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">

</style>

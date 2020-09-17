<template>
  <g-link
  class="menu_item post_link"
  :to="tag.path"
  role="menuitem">
    <div
    class="post-card__title"
    v-html="tag.title" />
  </g-link>
</template>

<script>
export default {
  props: ['tag']
}
</script>

<style lang="scss">

</style>

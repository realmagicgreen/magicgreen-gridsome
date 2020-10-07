<template>
  <g-link
  class="tag_link"
  :to="tag.path"
  role="menuitem"
  >
    <div
    class="tag_title"
    v-html="tag.title"
    :class=""/>
  </g-link>
</template>


<script>
export default {
  props: ['tag']
}
</script>

<style lang="scss" scoped>

</style>

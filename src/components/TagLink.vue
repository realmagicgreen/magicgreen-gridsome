<template>
  <g-link
  class="tag_link tag_title"
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
  .tag_link {
    padding: 5px;
    margin: 0 2px;
    text-decoration: none;
  }

</style>

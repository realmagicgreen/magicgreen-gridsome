<template>
<!-- to fix -->
  <div class="tag_cloud container">
    <TagLink
    v-for="edge in $page.tags.edges"
    :key="edge.node.id"
    :tag="edge.node"
    />
  </div>
<!--end to fix -->


  <g-link
  class="tag_link"
  :to="tag.path"
  role="menuitem"
  >
    <div
    class="tag_title"
    v-html="tag.title"
    :class=""/>
    <!-- {{ $page.tag.belongsTo.totalCount }} -->
  </g-link>

</template>

<static-query>
query {
  tags: allTag {
    totalCount
    edges {
      node {
        title
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</static-query>

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

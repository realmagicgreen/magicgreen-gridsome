<template>

<!-- to fix -->
<div class="tag_cloud container">
  <div class="links_list">
    <TagLink
    v-for="edge in $page.tags.edges"
    :key="edge.node.id"
    :tag="edge.node"
    />
  </div>
</div>
<!--end to fix -->
<!-- {{ $page.tag.belongsTo.totalCount }} works!-->

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

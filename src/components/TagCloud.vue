<template>
  <div class="tag_cloud horizontal_spacing">
    <div class="vertical_spacing border_brand_top">

      <div class="tag_block_icon">
        <IcoTag />
        <div class="">BROWSE ALL TAGS</div>
      </div>

      <div class="links_list" role="menu">
        <TagLink
        v-for="edge in $page.tags.edges"
        :key="edge.node.id"
        :tag="edge.node"
        :count="edge.node.belongsTo.totalCount"
        />
      </div>

    </div>
  </div>
</template>

<static-query>
  query {
    tags: allTag(sortBy: "title", order: ASC) {
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
  import TagLink from '~/components/TagLink.vue'
  import IcoTag from '~/assets/svgs/tag.svg'

  export default {
    components: {
      TagLink,
      IcoTag
    }
  }
</script>

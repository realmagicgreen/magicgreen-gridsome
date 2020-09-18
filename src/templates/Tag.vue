<template>
  <Layout>

    <div class="title_wrapper">
      <h1 class="tag_page_title h2">
        {{ $page.tag.title }}
      </h1>
    </div>

    <div class="posts post_grid">
      <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            subtitle
            path
            ad
            date (format: "D. MMMM YYYY")
            timeToRead
            tags {
              id
              title
              path
            }
            category {
              title
            }
            description
            content
            cover_image (width: 860, blur: 10)
          }
        }
      }
    }
  }
  posts: allPost {
		edges {
			node {
				id
				title
				...on Post {
				id
				title
				path
				}
			}
		}
	}
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  computed: {
    postLabel: function() {
      var pluralize = require("pluralize");
      return pluralize("post", this.$page.tag.belongsTo.totalCount);
    }
  },
  metaInfo: {
    title: 'Tags'
  }
}
</script>

<style lang="scss" scoped>
.posts {
  padding: 10px;
}

.tag_page_title {
  position: relative;
  left: 20px;
  padding-bottom: 6px;
  padding-top: 20px;
  max-width: 70%;
  font-weight: 400;
  &:before {
    position: absolute;
    content: "";
    width: 36px;
    height: 34px;
    padding-right: 10px;
    left: -36px;
    top: 20px;
    [data-theme="light"] & {
      background: url("../assets/svgs/tag.svg") no-repeat;
    }
    [data-theme="dark"] & {
      background: url("../assets/svgs/tag_white.svg") no-repeat;
    }

  }
}

.title_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
}
.tag_count {
  text-transform: uppercase;
  font-size: 80%;
  opacity: .65;
  text-align: left;
  width: 70%;
  padding-left: 25px;
}
</style>

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
  metaInfo: {
    title: 'Tags'
  }
}
</script>

<style lang="scss" scoped>
.posts {
  padding: 10px;
}

[data-theme="light"] .tag_page_title {
  position: relative;
  left: 28px;
  margin-top: 10px;
  max-width: 50%;
  font-weight: 400;
  &:before {
    position: absolute;
    content: "";
    background: url("../assets/svgs/tag.svg") no-repeat;
    width: 36px;
    height: 34px;
    padding-right: 10px;
    left: -36px;
    top: 20px;
  }
}

[data-theme="dark"] .tag_page_title {
  position: relative;
  &:before {
    position: absolute;
    content: "";
    background: url("../assets/svgs/tag_white.svg") no-repeat;
    width: 36px;
    height: 34px;
    padding-right: 10px;
    left: -36px;
    top: 20px;
  }
}


.title_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>

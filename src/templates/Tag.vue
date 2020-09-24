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
  links: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        ad
        path
      }
    }
  }
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
  margin: 6rem 0 4rem 0;
  padding-bottom: 6px;
  padding-top: 20px;
  max-width: 80%;
  font-weight: 400;
  text-align: center;

  &:before {
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    left: calc(50% - 25px);
    top: -50px;
    [data-theme="light"] & {
      background: url("../assets/svgs/tag.svg") no-repeat center center;
      -webkit-background-size: cover;
      background-size: cover;
    }
    [data-theme="dark"] & {
      background: url("../assets/svgs/tag_green.svg") no-repeat center center;
      -webkit-background-size: cover;
      background-size: cover;
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

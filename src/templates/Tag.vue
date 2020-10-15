<template>
  <Layout :show-logo="true" >

    <div class="tagpage horizontal_spacing">

      <div class="title_wrapper">

        <IcoTag class="icotag"/>

        <h1 class="tag_page_title">
          {{ $page.tag.title }}
        </h1>
      </div>

      <div class="posts post_grid">
        <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
      </div>

    </div>

    <TagCloud />

  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
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
import IcoTag from '~/assets/svgs/tag.svg'
import TagCloud from '~/components/TagCloud.vue'

export default {
  components: {
    PostCard,
    IcoTag,
    TagCloud
  },
  metaInfo () {
    return {
      title: this.$page.tag.title,
      bodyAttrs: {
          class: 'page_tag'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  padding: 10px;
}

.title_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: var(--space-1);
  flex-direction: column;
  height: 35vh;

  @media screen and (min-width: 640px) {
		flex-direction: row;
    height: initial;
	}

  .icotag {
    width: 60px;
    height: 60px;
  }
}
</style>

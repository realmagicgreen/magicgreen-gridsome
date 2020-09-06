<template>
  <Layout>

    <g-image
    alt="Cover image"
    v-if="$page.post.cover_image"
    :src="$page.post.cover_image"
    class="post_cover_image"
    />

    <div class="post_category">
      {{ $page.post.category.title }}
    </div>

    <div class="post_container">

      <div class="post_header">

        <h1 class="post_title">
          {{ $page.post.title }}
        </h1>

        <h2 class="post_subtitle border_top border_bottom">
          {{ $page.post.subtitle }}
        </h2>

        <PostMeta :post="$page.post" />    

      </div>

      <div class="post_content" v-html="$page.post.content" />

    </div>

  </Layout>
</template>


<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    subtitle
    category {
      title
    }
    path
    date (format: "DD MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image ( blur: 10)
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
import PostMeta from '~/components/PostMeta'
import PostLink from '~/components/PostLink'

export default {
  components: {
    PostMeta,
    PostLink
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      subtitle: this.$page.post.subtitle,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>


<style lang="scss">

.post {

  &_container {

    margin-left: var(--space);
    margin-right: var(--space);
    @media screen and (min-width: 881px) {
      max-width: 880px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &_title {
    padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
    text-align: center;
  }

  &_category {
    text-transform: uppercase;
  }

  &_header {
    width: 100%;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &_content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}



</style>

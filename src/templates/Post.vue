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
          <span class="ad" v-if="$page.post.ad">ad</span>
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
    photography
    ad
    content
    cover_image (width: 1920)
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
      ad: this.$page.post.ad,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        },
        {
          name: 'photography',
          content: this.$page.post.photography
        }
      ]
    }
  }
}
</script>


<style lang="scss">

.post {

  &_container {
    padding: 0 5px;
    margin-left: var(--space);
    margin-right: var(--space);

    @media screen and (min-width: 881px) {
      max-width: 880px;
      margin-left: auto;
      margin-right: auto;
    }
    h2,
    h3 {
      color: var(--title-color);
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 20px;
    }
  }

  &_cover_image {
    padding: 0;
    margin: 0;
    border-radius: 5px 5px 0 0;
  }

  &_title {
    padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
    text-align: center;
  }

  &_category {
    margin-top: -8px;
    padding-top: 3px;
    padding-bottom: 2px;
    border-radius: 0 0 5px 5px;
    text-align: right;
    padding-right: var(--space-small);
    background-color: var(--category_03);
    color: var(--black);
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

    p,
    ol,
    ul {
      max-width: 600px;
      margin: 0 0 0 auto;
    }
    ul, ol {
      padding-left: 20px;
    }

    blockquote p {
      max-width: none;
      em {
        font-size: 0.75rem;
        padding-top: .5rem;
        display: block;
      }
    }

    img {
      // width: calc(100% + var(--space) * 2);
      // margin-left: calc(var(--space) * -1);
      display: block;
      // max-width: none;
    }
  }
}

.post_metas {
  padding-top: 0;
  padding-bottom: 0;
  font-style: italic;
}

.ad {
  font-family: arial, sans-serif;
  margin-left: 7px;
  margin-right: 0px;
  background-color: var(--bg-content-color);
  border-radius: 3px;
  color: #006621;
  display: inline-block;
  font-size: 11px;
  border: 1px solid #006621;
  padding: 1px 3px 0 2px;
  line-height: 11px;
  vertical-align: middle;
  white-space: nowrap;
}


</style>

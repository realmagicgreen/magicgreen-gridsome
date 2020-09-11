<template>
  <Layout>

    <g-image
    alt="Cover image"
    v-if="$page.entry.cover_image"
    :src="$page.entry.cover_image"
    class="post_cover_image"
    />

    <div class="post_container">

      <div class="post_header">

        <h1 class="post_title">
          {{ $page.entry.title }}
        </h1>

        <h2 class="post_subtitle border_top border_bottom">
          {{ $page.entry.subtitle }}
        </h2>


      </div>

      <div class="post_content" v-html="$page.entry.content" />

    </div>

  </Layout>
</template>

<page-query>
query CustomPage ($id: ID!) {
  entry: customPage (id: $id) {
    title
    subtitle
    cover_image
    content
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
export default {
  metaInfo () {
    return {
      title: this.$page.entry.title
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
  }

  &_title {
    padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
    text-align: center;
  }

  &_category {
    margin-top: -8px;
    padding-top: 3px;
    padding-bottom: 2px;
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

</style>

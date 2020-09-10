<template>
    <g-link class="card content-box" :to="post.path">
      <div class="card_post_image clipped">
        <g-image
        class=""
        alt="Cover image"
        v-if="post.cover_image"
        :src="post.cover_image"
        />
      </div>
      <div class="card_post_text">
        <h2 class="h1" v-html="post.title" />
        <!-- <span class="ad"></span> -->
        <h3 class="border_top border_bottom" v-html="post.subtitle" />
        <p class="card_post_text_content" v-html="post.description" />

        <PostMeta class="card_meta" :post="post" />

      </div>
    </g-link>
</template>


<script>
import PostMeta from '~/components/PostMeta'

export default {
  components: {
    PostMeta
  },
  props: ['post']
}
</script>

<style lang="scss">

.post_metas {
  justify-content: flex-start;
  padding-top: 0;
  padding-bottom: 0;
  font-style: italic;
}

.post_tag_block,
.post_date {
  display: none;
}

//originals
.card {
  text-decoration: none;
  position: relative;
  background-color: var(--bg-content-color);
  box-shadow: --card-shadow;
  transition: --transition_shadow;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space);

  .card_post_image {
    position: relative;
    width: 100%;
    color: var(--transparent_grey);
    transition: transform 0.25s ease-in-out;
    transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;
  }

  &:focus,
  &:hover {
    -webkit-box-shadow: --card-shadow--hover;
    box-shadow: --card-shadow--hover;

    .card_post_image {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
  }

  &:active {
    -webkit-transform: translateY(0.25em);
    transform: translateY(0.25em);
  }

  h1,
  h3 {
    text-transform: uppercase;
  }
}

.card_post_text {
  padding: 0 var(--space-small);
  margin-top: -10px;
  margin-bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: calc(var(--space-small)/2);
  }
}

.card_post_text_content {
  margin-top: calc(var(--space)/2);
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  //flex-grow: 1;
  color: var(--title-color);
}

.clipped {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 97%, 0% 88%);
  clip-path: polygon(0 0, 100% 0, 100% 97%, 0% 88%);
}

</style>

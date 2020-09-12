<template>
  <div class="post_metas">

    <div class="post_meta_group left post_tag_block">
   		<g-link class="post_tag_link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			{{ tag.title }}
   		</g-link>
    </div>

    <div class="post_meta_group right">
      <div class="post_meta_item post_date">
        {{ post.date }}
      </div>

      <div class="post_meta_item post_time_to_read" v-if="post.timeToRead">
        {{ post.timeToRead }} min read
      </div>

      <div class="post_meta_item post_photography" v-if="post.photography">
        Photography: {{ post.photography }}
      </div>
    </div>

  </div>

</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">

.post_metas {
  color: var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: var(--space--small);
  padding-bottom: calc(var(--space)/2);
  padding-right: calc(var(--space)/2);
  font-size: .9rem;
  white-space: nowrap;

  @media screen and (min-width: 880px) {
    flex-direction: row;
  }

  .right {
    @media screen and (min-width: 880px) {
      text-align: right;
    }
  }
}

.post_meta_group {

}

.post_tag_link {
  margin-left: .2rem;
  margin-right: .2rem;
  padding: .4rem .1rem;
  color: var(	--text_color) !important;
  font-style: italic;
  text-decoration: none;
  &:hover {
    color: var(--title_color) !important;
  }
}

.post_tag_block {
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;
}
.post_date,
.post_time_to_read,
.post_photography {
  color: var(	--text_color);
  font-style: italic;
  padding: .4rem .1rem;
}


</style>

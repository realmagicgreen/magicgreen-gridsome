<template>
  <div class="post_metas">

    <div class="post_meta_group left ">
      <div class="post_meta_item post_tags">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="none"
          stroke="var(--text_color)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="small_icon"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
        <div class="post_tag_links">
          <g-link class="post_tag_link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">{{ tag.title }}</g-link>
        </div>
      </div>
    </div>

    <div class="post_meta_group right">
      <div class="post_meta_item post_date">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--text_color)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="small_icon">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line></svg>{{ post.date }}
      </div>

      <div class="post_meta_item post_time_to_read" v-if="post.timeToRead">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="var(--text_color)"
          class="small_icon">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>{{ post.timeToRead }} min read
      </div>

      <div class="post_meta_item post_photography" v-if="post.photography">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--text_color)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="small_icon">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>{{ post.photography }}
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
    padding-top: var(--space-1);
    padding-bottom: calc(var(--space-2)/2);
    padding-right: calc(var(--space-2)/2);
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
    padding-top: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    &.left {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  .post_tag_link {
    //a
    margin-left: .2rem;
    margin-right: .2rem;
    padding: .4rem .1rem;
    color: var(	--text_color) !important;
    border-bottom: 1px solid transparent;
    font-style: italic;
    text-decoration: none;
  }

  .post_tag_links {
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

  .post_meta_item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    &.post_tags svg {
      margin-top: 10px;
    }
  }

</style>

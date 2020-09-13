<template>
  <div class="post_metas">

    <div class="post_meta_group left ">
      <div class="post_meta_item post_tags">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="var(--text_color)"
          class="small_icon">
            <path d="M0 0h24v24h-24z" fill="none"/>
            <path d="M21.41 11.58l-9-9c-.36-.36-.86-.58-1.41-.58h-7c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zm-15.91-4.58c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
        <div class="post_tag_links">
          <g-link class="post_tag_link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
            {{ tag.title }}
          </g-link>
        </div>
      </div>
    </div>

    <div class="post_meta_group right">
      <div class="post_meta_item post_date">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="small_icon">
            <path d="M17 12h-5v5h5v-5zm-1-11v2h-8v-2h-2v2h-1c-1.11 0-1.99.9-1.99 2l-.01 14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2h-1v-2h-2zm3 18h-14v-11h14v11z"/>
            <path d="M0 0h24v24h-24z" fill="none"/>
        </svg>{{ post.date }}
      </div>

      <div class="post_meta_item post_time_to_read" v-if="post.timeToRead">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="small_icon">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>{{ post.timeToRead }} min read
      </div>

      <div class="post_meta_item post_photography" v-if="post.photography">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="small_icon">
          <g shape-rendering="geometricPrecision" fill-rule="evenodd" clip-rule="evenodd">
            <circle cx="12" cy="12" r="3.2"/>
            <path d="M9 2l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
            <path d="M0 0h24v24h-24z" fill="none"/>
          </g>
        </svg>{{ post.photography }}
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

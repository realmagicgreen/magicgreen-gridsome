<template>
  <div class="post_metas">

    <div class="post_meta_group left ">
      <div class="post_meta_item post_tags">
        <IcoTag class="small_icon"/>
        <div class="post_tag_links">
          <g-link
            class="post_tag_link"
            v-for="tag in post.tags"
            :key="tag.id"
            :to="tag.path">
            {{ tag.title }}
          </g-link>
        </div>
      </div>
    </div>

    <div class="post_meta_group right">
      <div class="post_meta_item post_date">
        <IcoCalendar class="small_icon"/>
        {{ post.date }}
      </div>

      <div class="post_meta_item post_time_to_read" v-if="post.timeToRead">
        <IcoClock class="small_icon"/>
        {{ post.timeToRead }} min read
      </div>

      <div class="post_meta_item post_photography" v-if="post.photography">
        <IcoPhotographer class="small_icon"/>
        {{ post.photography }}
      </div>
    </div>

  </div>

</template>

<script>
import IcoTag from '~/assets/svgs/tag.svg'
import IcoCalendar from '~/assets/svgs/calendar.svg'
import IcoClock from '~/assets/svgs/clock.svg'
import IcoPhotographer from '~/assets/svgs/photographer.svg'


export default {
  props: ['post'],
	components: {
    IcoTag,
    IcoCalendar,
    IcoClock,
		IcoPhotographer
  }
}
</script>

<style lang="scss">

  .post_metas {
    font-style: italic;
    font-size: .9rem;
    white-space: nowrap;
    color: var(--grey);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: var(--space-05);
    padding-bottom: var(--space-1);
    padding-right: var(--space-1);
    border-bottom: 1px solid var(--border_color);
    margin-bottom: var(--space-2);

    @media screen and (min-width: 900px) {
      flex-direction: row;
    }

    .right {
      @media screen and (min-width: 900px) {
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
      stroke: white;
      margin-top: 10px;
    }
  }

</style>

<template>

  <div class="post_links_wrap">

    <div class="post_links_title">
      <h2>Know More Links</h2>
    </div>

    <!-- <div class="post_links">
      <g-link
        class="post_link"
        v-for="extlink in post.extlinks"
        :key="extlink.id"
        :to="extlink.url"
        >{{ extlink.text }}
      </g-link>
    </div> -->

    <div v-html="$static.post.title" />

  </div>

</template>

<static-query>
  query {
    post (id: "1") {
      title
    }
  }
</static-query>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">


</style>

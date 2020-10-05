<template>
  <Layout>
    <h1>Know more links</h1>
    <a href="{{ $page.posts.extlinks.url }}" class="ext_link">{{ $page.post.extlinks.text }}</a>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Posts ($id: ID!) {
  posts (id: $id) {
    extlinks {
      text
      url
    }
  }
}
</page-query>

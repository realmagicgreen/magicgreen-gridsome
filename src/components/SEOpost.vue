<template>

</template>

<static-query>
  query {
    post {
      title
      subtitle
      description
    },
    metadata {
      siteName
      siteUrl
    }
  }
</static-query>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        { name: "description", content: this.$page.post.description },

        // Some Open Graph Tags
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.$page.post.description },
        { property: "og:image", content: this.getCoverImage },
        {
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$page.post.path
        },

        // Some Twitter Cards Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:image", content: this.getCoverImage  },
        { name: "twitter:description", content: this.$page.post.description }
      ],
      //Some ld+json tags
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            description: this.$page.post.description,
            datePublished: this.$page.post.date,
            author: {
              name: this.$page.post.author
            },
            headline: this.$page.post.title,
            image: this.getCoverImage,
          }
        }
      ]
    };
  },
  computed: {
    getCoverImage() {
      let coverImage = "";
      const cover = this.$page.post.cover_image;
      if (cover != null) {
        coverImage = `${this.$page.post.cover_image.src}`;
      }
      return coverImage;
    }
  }
};
</script>

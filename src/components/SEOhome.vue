<template>

</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      settings {
        SEOimage
      }
    }
  }
</static-query>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        { name: "description", content: this.$page.metadata.siteDescription },

        // Some Open Graph Tags
        { property: "og:title", content: this.$page.metadata.siteName },
        { property: "og:description", content: this.$page.metadata.siteDescription },
        //{ property: "og:image", content: this.$static.metadata.siteUrl + this.$page.metadata.settings.SEOimage },
        { property: "og:url", content: this.$static.metadata.siteUrl },

        // Some Twitter Cards Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.metadata.siteName },
        // { name: "twitter:image", content: this.$page.metadata.SEOimage  },
        { name: "twitter:description", content: this.$page.metadata.siteDescription }
      ],
      //Some ld+json tags
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            description: this.$page.metadata.siteDescription,
            datePublished: this.$page.post.date,
            author: {
              name: 'Rokma'
            },
            headline: this.$page.metadata.siteName,
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

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
        //key: is needed here to override default values in main.js
        {
          key: "description",
          name: "description",
          content: this.$page.post.description
        },

        // Some Open Graph Tags
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.post.title
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.post.description
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getCoverImage
        },
        {
          key: 'og:image:width',
          property: 'og:image:width',
          content: '1920px'
        },
        {
          key: 'og:image:height',
          property: 'og:image:height',
          content: '1280px'
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$page.post.path
        },

        // Some Twitter Cards Tags

        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.$page.post.title
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: this.getCoverImage
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.description
        }
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
              name: 'MagicGreen'
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

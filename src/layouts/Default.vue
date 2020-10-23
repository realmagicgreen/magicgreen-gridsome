<template>
  <div id="app">

    <Header />

    <main class="main">
      <slot/>
    </main>

    <Footer />

  </div>
</template>

<page-query>
  query {
    metadata {
      siteName
  		siteDescription
      settings {
        nav {
          links {
            path
            title
            subtitle
          }
        }
      }
    }
  }
</page-query>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  metaInfo () {
    return {
      meta: [
        {
          key: 'description',
          name: 'description',
          //content: $metadata.siteDescription
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.main {
  width: 100vw;
  margin: 0 auto;
  margin-bottom: 0;
  max-width: 1920px;
  @media only screen and (min-width: 1921px) {
    margin-top: var(--space-1);
  }
}
</style>

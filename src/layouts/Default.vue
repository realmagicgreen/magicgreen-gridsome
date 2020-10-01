<template>
  <div id="app" name="top">

    <Header />

    <main class="main">
      <slot/>
    </main>

    <Footer />

  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
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

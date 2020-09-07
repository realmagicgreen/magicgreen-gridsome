<template>
  <div id="app">

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
  margin: 0 auto;
  padding-bottom: 2rem;
  // padding: 0 5px; //move to post_container
}
</style>

<template>
  <div class="">

    <!--
    <div
    v-if="settings.nav.links.length > 0"
    v-for="link in settings.nav.links"
    :key="link.path">
      <g-link
        :to="link.path"
        :title="link.title">
        {{ link.title }}
      </g-link>
    </div> -->

    <div
      class=""
      v-for="link in settings.nav.links"
      :key="link.title">

        <div class="">
          {{ link.subtitle }}
        </div>

    </div>


  </div>
</template>

<static-query>
query {
  metadata {
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
</static-query>




<script>
export default {
  computed: {
    settings() {
      return this.meta.settings;
    }
  }
}
</script>




<style lang="scss" scoped>
  [data-theme="dark"] .slogan {
      color: var(--text_color);
  }
  .services .slogan_services.hide { display: block!important; }
  .products .slogan_products.hide { display: block!important; }
  .techniques .slogan_techniques.hide { display: block!important; }
  .solutions .slogan_solutions.hide { display: block!important; }
  .know .slogan_know.hide { display: block!important; }
  .health .slogan_health.hide { display: block!important; }
  .resources .slogan_resources.hide { display: block!important; }

  .resources h2.slogan.slogan_resources.hide {
    display: block!important;
  }

</style>

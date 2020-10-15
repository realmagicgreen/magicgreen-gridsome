<template>
  <div class="horizontal_spacing">
    <h2
    v-if="slogan_services"
    class="center slogan slogan_services hide"
    v-html="$static.metadata.settings.slogans.services" />
    <h2
    v-if="slogan_products"
    class="center slogan slogan_products hide"
    v-html="$static.metadata.settings.slogans.products" />
    <h2
    v-if="slogan_techniques"
    class="center slogan slogan_techniques hide"
    v-html="$static.metadata.settings.slogans.techniques" />
    <h2
    v-if="slogan_solutions"
    class="center slogan slogan_solutions hide"
    v-html="$static.metadata.settings.slogans.solutions" />
    <h2
    v-if="slogan_know"
    class="center slogan slogan_know hide"
    v-html="$static.metadata.settings.slogans.know" />
    <h2
    v-if="slogan_health"
    class="center slogan slogan_health hide"
    v-html="$static.metadata.settings.slogans.health" />
    <h2
    v-if="slogan_resources"
    class="center slogan slogan_resources hide"
    v-html="$static.metadata.settings.slogans.resources" />
  </div>
</template>

<static-query>
query {
  metadata {
    settings {
      slogans {
        services
        products
        techniques
        solutions
        know
        health
        resources
      }
    }
  }
}
</static-query>




<script>
export default {
  props: ['slogan_services', 'slogan_products', 'slogan_techniques', 'slogan_solutions', 'slogan_know', 'slogan_resources', 'slogan_health']

  // computed: {
  //   settings() {
  //     return this.meta.settings;
  //   }
  // }

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

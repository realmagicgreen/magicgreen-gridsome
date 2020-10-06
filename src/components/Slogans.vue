<template>
  <div class="horizontal_spacing">
    <h2 class="center slogan slogan_services hide" v-html="$static.metadata.settings.slogans.services" />
    <h2 class="center slogan slogan_products hide" v-html="$static.metadata.settings.slogans.products" />
    <h2 class="center slogan slogan_techniques hide" v-html="$static.metadata.settings.slogans.techniques" />
    <h2 class="center slogan slogan_solutions hide" v-html="$static.metadata.settings.slogans.solutions" />
    <h2 class="center slogan slogan_know hide" v-html="$static.metadata.settings.slogans.know" />
    <h2 class="center slogan slogan_health hide" v-html="$static.metadata.settings.slogans.health" />
    <h2 class="center slogan slogan_resources hide" v-html="$static.metadata.settings.slogans.resources" />
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




<style lang="scss" scoped>
  [data-theme="dark"] .slogan {
      color: var(--brand_color);
  }
  .services .slogan_services.hide { display: block!important; }
  .products .slogan_products.hide { display: block!important; }
  .techniques .slogan_techniques.hide { display: block!important; }
  .solutions .slogan_solutions.hide { display: block!important; }
  .know .slogan_know.hide { display: block!important; }
  .health .slogan_health.hide { display: block!important; }
  .resources .slogan_resources.hide { display: block!important; }

</style>

<template>
  <div class="horizontal_spacing">
    <h2 class="center slogan" v-html="$static.metadata.settings.slogans.home" />
  </div>
</template>

<static-query>
query {
  metadata {
    settings {
      slogans {
        home
      }
    }
  }
}
</static-query>




<style lang="scss" scoped>

[data-theme="dark"] .slogan {
    color: var(--brand_color);
}

</style>

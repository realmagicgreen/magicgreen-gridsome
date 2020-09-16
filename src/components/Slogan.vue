<template>
  <div class="container">
    <h2 class="center slogan" v-html="$static.metadata.slogan" />
  </div>
</template>

<static-query>
query {
  metadata {
    slogan
  }
}
</static-query>




<style lang="scss" scoped>

[data-theme="dark"] .slogan {
    color: var(--brand_color);
}

</style>

<template>
  <h2 class="center slogan" v-html="$static.metadata.slogan" />
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

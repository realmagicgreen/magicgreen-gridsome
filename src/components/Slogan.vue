<template>
  <div class="container">
    <h2 class="center" v-html="$static.metadata.slogan" />
  </div>
</template>

<static-query>
query {
  metadata {
    slogan
  }
}
</static-query>

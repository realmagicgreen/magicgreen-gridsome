<template>
  <div class="container">
    <h2 v-html="$static.metadata.slogan" />
  </div>
</template>

<static-query>
query {
  metadata {
    slogan
  }
}
</static-query>

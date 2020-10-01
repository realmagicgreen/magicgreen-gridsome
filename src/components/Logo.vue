<template>
	<div
  v-if="showLogo"
  class="logo">
	  <IcoLogo />
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<script>
import IcoLogo from '~/assets/svgs/mg_logo.svg'

export default {
  props: {
    showLogo: { default: true }
  },
	components: {
    IcoLogo
  },
}
</script>

<style lang="scss">

</style>

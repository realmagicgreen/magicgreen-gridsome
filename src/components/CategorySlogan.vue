<template>

	<div v-for="catItem in $static.metadata.headerNavigation" :key="catItem.name"
	class="category_slogan">
		<g-link
			class="menu_item"
			role="menuitem"
			:to="catItem.link"
			:title="catItem.name"
		>{{ catItem.name}} {{ catItem.slogan}}</g-link>
	</div>


</template>

<static-query>
query {
  metadata {
		headerNavigation {
	    name
			slogan
	  }
  }
}
</static-query>


<script>

</script>

<style lang="scss">

</style>

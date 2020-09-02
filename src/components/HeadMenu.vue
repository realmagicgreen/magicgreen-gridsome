<template>
	<div class="head_menu" role="contentinfo">
    <div v-for="navItem in $static.metadata.headerNavigation" :key="navItem.name" class="menu_item">
      <g-link
				class="menu_item"
				role="menuitem"
        :to="navItem.link"
        :title="navItem.name"
      >{{ navItem.name}}</g-link>
    </div>
	</div>
</template>

<static-query>
query {
  metadata {
		headerNavigation {
	    name
	    link
	  }
  }
}
</static-query>


<script>

</script>

<style lang="scss">
.head_menu {
	width: 100%;
	display: flex;
	.menu_item {
		color: var(--brand_color);
		text-transform: uppercase;
		text-decoration: none;
		padding-right: calc(var(--space-small)/3);
	}
}
</style>

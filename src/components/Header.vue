<template>
	<header class="header">

		<Logo v-if="showLogo" />

		<div class="header_menus">
			<ToggleTheme />
			<HeadMenu />
		</div>

	</header>
</template>


<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import HeadMenu from '~/components/HeadMenu.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme,
    HeadMenu
  }
}
</script>

<style lang="scss">
.header {
  background-color: var(--black);
  display: flex;
	flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: var(--space-small) calc(var(--space-small)/2);
  flex-wrap: nowrap;

	.logo {
		flex-grow: 4;
	}

	@media screen and (min-width: 880px) {
		flex-direction: column;
		.logo {
			min-height: 70px;
		}
	}

	@media screen and (min-width: 1260px) {
		flex-direction: row;
		padding-left: var(--space-small);
		padding-right: var(--space-small);
		margin: 0 auto;
		max-width: 1300px;
	}


	.header_menus {
		display: flex;
		align-items: center;
	}
}
</style>

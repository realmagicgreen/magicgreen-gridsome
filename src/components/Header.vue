<template>
	<header class="header">
		<div class="header_wrap">
			<g-link class="logo_wrapper" to="/">
				<Logo v-if="showLogo" />
			</g-link>

			<div class="header_menus">
				<ToggleTheme />
				<HeadMenu />
			</div>
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
  justify-content: center;
  align-items: center;
  min-height: var(--header-height);

	.header_wrap {
		display: flex;
		flex-direction: row;
	  justify-content: space-between;
	  align-items: center;
		flex-wrap: nowrap;
		padding: var(--space-small) calc(var(--space-small)/2);
		width: 100%;
		max-width: 1500px;

		@media screen and (min-width: 880px) {
			flex-direction: column;
			.logo_wrapper {
				min-height: 70px;
			}
		}

		@media screen and (min-width: 1260px) {
			flex-direction: row;
			padding-left: var(--space-small);
			padding-right: var(--space-small);
			margin: 0 auto;
		}

		@media only screen and (min-width: 1500px) {
			margin: 0 auto;
		}
	}

	.logo_wrapper {
		flex-grow: 4;
		text-decoration: none;
	}


	.header_menus {
		display: flex;
		align-items: center;
	}
}
</style>

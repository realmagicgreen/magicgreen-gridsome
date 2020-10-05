<template>
	<header class="header_wrap" :class="{'menu-is-open': isMenuActive}">
		<div class="header horizontal_spacing">

			<g-link class="logo_wrapper" title="link to starting page" to="/">
				<div class="hide">
					Magic Green
				</div>
				<Logo />
			</g-link>

			<div class="menu_wrapper">
				<div class="header_menus">

					<ToggleTheme />

					<div class="menu_wrap header_item">

						<button
						class="toggle_menu_button"
						aria-label="Toggle menu"
						:class="{'is-active': isMenuActive}"
						@click="isMenuActive = !isMenuActive"
						@keyup="isMenuActive = !isMenuActive">
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</button>

					</div>

				</div>

				<div
				role="contentinfo"
				class="head_menu togglable_menu"
				:class="{'menu-is-open': isMenuActive}"
				@click="isMenuActive = !isMenuActive">

					<div
					v-for="navItem in $static.metadata.headerNavigation"
					:key="navItem.name"
					class="menu_item_wrap"
					role="menu">
						<g-link
						class="menu_item"
						role="menuitem"
						:to="navItem.link"
						:title="navItem.name">

							{{ navItem.name}}
						</g-link>

					</div>

				</div>

			</div>


		</div>
	</header>
</template>

<static-query>
query {
  metadata {
		headerNavigation {
	    name
	    link
			slogan
	  }
  }
}
</static-query>


<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  },
	data: () => ({
    isMenuActive: false
  })
}
</script>


<style lang="scss">
// in _header.scss
</style>

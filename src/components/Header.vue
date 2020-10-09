<template>
	<header class="header_wrap" :class="{'menu-is-open': isMenuActive}">
		<div class="header horizontal_spacing">

			<g-link class="logo_wrapper" title="link to starting page" to="/">
				<div class="hide">Magic Green</div>
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
				role="menu"
				class="head_menu togglable_menu"
				:class="{'menu-is-open': isMenuActive}"
				@click="isMenuActive = !isMenuActive">

					<div
					v-if="settings.nav.links.length > 0"
					v-for="link in settings.nav.links"
					:key="link.path"
					class="menu_item_wrap">
            <g-link
              :to="link.path"
							:title="link.title"
							role="menuitem"
              class="menu_item">
              {{ link.title }}
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
		settings {
      nav {
        links {
          path
          title
        }
      }
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
	computed: {
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    }
  },
	data: () => ({
    isMenuActive: false
  })
}
</script>


<style lang="scss">
// in _header.scss
</style>

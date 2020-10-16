<template>
	<header class="header_wrap" :class="{'menu-is-open': isMenuActive}">
		<div class="header horizontal_spacing">

			<g-link class="logo_wrapper" title="link to starting page" to="/">
				<h1 class="hide">Magic Green</h1>
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
							:title="link.subtitle"
							role="menuitem"
              class="menu_item">
              {{ link.title }}
            </g-link>
          </div>

				</div>

			</div>

		</div>

		<div class="subheader horizontal_spacing">
			<div
			v-for="link in settings.nav.links"
			:key="link.subtitle"
			class="menu_item_wrap">
				<h2
					:title="link.subtitle">
					{{ link.subtitle }}
				</h2>
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
          subtitle
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

 /* the rest is in _header.scss */

 [data-theme="dark"] .slogan {
		 color: var(--text_color);
 }
 .services .slogan_services.hide { display: block!important; }
 .products .slogan_products.hide { display: block!important; }
 .techniques .slogan_techniques.hide { display: block!important; }
 .solutions .slogan_solutions.hide { display: block!important; }
 .know .slogan_know.hide { display: block!important; }
 .health .slogan_health.hide { display: block!important; }
 .resources .slogan_resources.hide { display: block!important; }

 .resources h2.slogan.slogan_resources.hide {
	 display: block!important;
 }
</style>

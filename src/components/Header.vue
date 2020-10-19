<template>
	<header class="header_wrap" :class="{'menu-is-open': isMenuActive}">
		<div class="header horizontal_spacing">

			<a
			class="logo_wrapper"
			:title="$static.metadata.siteDescription"
			href="/">
				<h1 class="hide">{{ $static.metadata.siteName }}</h1>
				<h2 class="site_description">
					{{ $static.metadata.siteDescription }}
				</h2>
				<Logo />
			</a>

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

	</header>
</template>

<static-query>
query {
  metadata {
		siteName
		siteDescription
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
  // no more _header.scss

	.header_wrap {
		position: relative;
	 	background-color: var(--black);
	 	display: flex;
	 	flex-direction: column;
	 	justify-content: center;
	 	align-items: center;
	 	min-height: var(--header_height);
	 	box-shadow: var(--bottom_shadow);
	 	padding-left: 10px;
	 	padding-right: 10px;

	 	@media screen and (max-width: 880px) {
	 		&.menu-is-open {
	 			position: fixed;
	 			z-index: 11;
	 			width: 100%;
	 		}
	 	}

	 	.header_menus {
	 		display: flex;
	 		align-items: center;
	 		flex-grow: 1;
	 		position: relative;
	 		z-index: 12;
	 	}
	}

	.header {
	 	display: flex;
	 	flex-direction: row;
	 	justify-content: space-between;
	 	align-items: center;
	 	flex-wrap: nowrap;
	 	padding: var(--space-1) 0;
	 	width: 100%;
	 	max-width: 1500px;

	 	[data-theme="light"] & {
	 		border-top: 0 none;
	 	}

	 	@media screen and (min-width: 880px) {
	 		flex-direction: column;

	 		.logo_wrapper {
	 			min-height: 70px;
	 		}
	 	}

	 	@media screen and (min-width: 1280px) {
	 		flex-direction: row;
	 		padding-left: var(--space-1);
	 		padding-right: var(--space-1);
	 		margin: 0 auto;
	 	}

	 	@media only screen and (min-width: 1500px) {
	 		margin: 0 auto;
	 	}

		//.logo_wrapper {
			// &::after {
			// 	content: attr(title);
			// 	display: block;
			// 	position: absolute;
			// 	left: 10vw;
			// 	width: 80vw;
			// 	height: fit-content;
			// 	font-size: calc(var(--heading1)/10*8);
			// 	color: var(--title_color);
			// 	line-height: 1.2;
			// 	text-align: center;
			// 	top: 200%;
			// 	@media only screen and (min-width: 640px) {
			// 		top: 110%;
			// 	}
			//}
		//}
	}

	.header.horizontal_spacing {
		position: relative;
	 	z-index: 10;
	}

	.menu_wrapper {
	 	display: flex;
	}

 	.head_menu {
		width: 100%;
 		display: flex;
 		justify-content: center;

	 	.menu_item {
	 		color: var(--brand_color);
	 		text-transform: uppercase;
	 		text-decoration: none;
	 		display: flex;
	 		align-items: center;
	 		justify-content: center;
	 		border: 1px solid var(--link_color);
	 		margin-left: 20vw;
	 		margin-right: 20vw;
	 		min-height: 7vh;

	 		&.active {
	 			border: 2px solid var(--brand_color);
	 			border: 0 none;
	 			font-size: 150%;

	 			&::after {
	 				content: attr(title);
	 				display: block;
	 				position: absolute;
	 				left: 10vw;
	 				width: 80vw;
	 				height: fit-content;
	 				font-size: calc(var(--heading1)/10*8);
	 				color: var(--title_color);
	 				line-height: 1.2;
					text-align: center;
					top: 200%;
					@media only screen and (min-width: 880px) {
						top: 110%;
					}
	 			}
	 		}

	 		@media only screen and (min-width: 880px) {
	 			border: 0 none;
	 			margin-left: var(--space-05);
	 			margin-right: var(--space-05);

	 			&.active {
	 				border: 0 none;
	 				font-size: 100%;
	 				font-weight: normal;
	 				border-bottom: 1px solid var(--brand_color);
	 			}
	 		}
	 	}
	}

	.toggle_menu_button {
	 	background-color: transparent;
	 	color: white;
	 	display: block;
	 	width: 48px;
	 	height: 48px;
	 	position: relative;
	 	margin-left: auto;
	 	cursor: pointer;
	 	border: 0;

	 	&:focus {
	 		outline: 0 none;
	 	}

	 	span {
	 		background-color: currentColor;
	 		display: block;
	 		height: 2px;
	 		left: calc(50% - 18px);
	 		position: absolute;
	 		-webkit-transform-origin: center;
	 		transform-origin: center;
	 		-webkit-transition-duration: 40ms;
	 		transition-duration: 40ms;
	 		-webkit-transition-property: background-color,opacity,-webkit-transform;
	 		transition-property: background-color,opacity,-webkit-transform;
	 		transition-property: background-color,opacity,transform;
	 		transition-property: background-color,opacity,transform,-webkit-transform;
	 		-webkit-transition-timing-function: ease-out;
	 		transition-timing-function: ease-out;
	 		width: 36px;

	 		&:first-child {
	 			top: calc(50% - 13px);
	 		}

	 		&:nth-child(2) {
	 			top: calc(50%);
	 		}

	 		&:nth-child(3) {
	 			top: calc(50% + 13px);
	 		}
	 	}

	 	&.is-active span:first-child {
	 		transform: translateY(13px) rotate(45deg);
	 	}

	 	&.is-active span:nth-child(2) {
	 		opacity: 0;
	 	}

	 	&.is-active span:nth-child(3) {
	 		transform: translateY(-13px) rotate(-45deg);
	 	}

	}

	.togglable_menu {
		width: 0;
		overflow: hidden;

	 	@media only screen and (max-width: 879px) {

	 		&.menu-is-open {
	 			position: fixed;
	 			z-index: 11;
	 			top: 0;
	 			right: 0;
	 			bottom: 0;
	 			left: 0;

	 			display: flex;
	 			flex-direction: column;
	 			justify-content: space-around;
	 			height: 100vh;
	 			min-width: 100%;
	 			padding-top: 20vh;
	 			padding-bottom: 10vh;
	 			background-color: var(--black);
	 		}
	 	}
	}

	@media only screen and (min-width: 880px) {
	 	.togglable_menu {
			width: auto;
			overflow: visible;
	 		display: flex;
	 	}

	 	.toggle_menu_button {
	 		display: none;
	 	}
	 }

</style>


<style lang="scss" scoped>
	body[class*="post_"] {
	 .head_menu .menu_item.active::after {
		  display: none!important;
	  }
	}

	// [data-theme="dark"] .subheader {
	// 	color: var(--text_color);
	// }

</style>

<template>
	<header class="header_wrap" :class="{'menu-is-open': isMenuActive}">
		<div class="header">

			<g-link class="logo_wrapper" to="/">
				<Logo :showLogo="true" :showText="true" />
			</g-link>

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
    showLogo: { default: true },
		showText: { default: true }
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


.head_menu {
	width: 100%;
	display: flex;
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
			padding-top: 10px;
      padding-bottom: 10px;
			font-weight: 600;
      font-size: 115%;
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
	    top: calc(50% );
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
	display: none;
	@media only screen and (max-width: 880px) {
		&.menu-is-open {
			background-color: var(--black);
			position: fixed;
			top: 79px;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 11;

			display: flex;
			flex-direction: column;
			justify-content: space-around;
			min-height: calc(100vh - var(--header_height));

	    // min-height: 100%;
	    height: 100vh;
			min-width: 100%;
			padding-top: 6vh;
	    padding-bottom: 24vh;
		}
	}
}

@media only screen and (min-width: 880px) {
	.togglable_menu {
		display: flex;
	}
	.toggle_menu_button {
		display: none;
	}
}
</style>

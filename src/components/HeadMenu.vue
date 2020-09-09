<template>
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
		:class="{'is-active': isMenuActive}">
	    <div v-for="navItem in $static.metadata.headerNavigation" :key="navItem.name" class="menu_item_wrap">
			  <g-link
				class="menu_item"
				role="menuitem"
        :to="navItem.link"
        :title="navItem.name"
				@click="isMenuActive = !isMenuActive">
				  {{ navItem.name}}
				</g-link>
	    </div>
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
export default {
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
		border: 1px solid #306600;
    margin-left: 20vw;
    margin-right: 20vw;
    min-height: 7vh;
		@media only screen and (min-width: 880px) {
			border: 0 none;
			margin-left: calc(var(--space-small)/2);
			margin-right: calc(var(--space-small)/2);
		}
		&.active {
			border: 2px solid #7f0;
			padding-top: 10px;
      padding-bottom: 10px;
			font-weight: 600;
      font-size: 115%;
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
	&.is-active {
		background-color: var(--black);
		position: absolute;
		left: 0;
		right: 0;
    z-index: 10;
		display: flex;
    min-width: 100%;
    padding-top: 1rem;
    flex-direction: column;
    justify-content: space-around;
    min-height: calc(100vh - 94px);
    min-width: 100%;
    padding-top: 6vh;
    padding-bottom: 6vh;

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

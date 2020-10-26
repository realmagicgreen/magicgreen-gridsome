<template>
	<div
  v-if="showLogo"
  class="logo">
	  <IcoLogo />
	</div>
</template>


<script>
import IcoLogo from '~/assets/svgs/mg_logo.svg'

export default {
  props: {
    showLogo: { default: true }
  },
	components: {
    IcoLogo
  },
}
</script>

<style lang="scss">
 	// no more _logo.scss

	.logo {
		text-decoration: none;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		padding-top: 6px;
		padding-bottom: 6px;

		footer & {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-left: 0;
			padding-right: 0;
		}

		svg {
			height: 13vw;
			width: auto;
			@media screen and (min-width: 480px) {
				height: 14vw;
			}
			@media screen and (min-width: 640px) {
				height: 12vw;
			}
			@media screen and (min-width: 900px) {
				//
			}
			@media screen and (min-width: 1280px) {
				height: auto;
				width: 26vw;
			}
			@media screen and (min-width: 1380px) {
				// width: 9vw;
			}

			#LOGO {
				fill: var(--brand_color);
			}

			#TEXT {
				fill: var(--brand_color);
			}
		}

	}

	.logo_wrapper {
		//a
		position: relative;
		z-index: 12;
		border-bottom: 0 none!important;
		flex-grow: 4;
		text-decoration: none;
		transition: all 1s ease-in-out;

		&:hover {
			border-bottom: 0 none!important;

			.logo {
				animation: pulse 2s infinite;
			}
		}
	}

	@keyframes pulse {
		10% {
			transform: scale(1.05);
		}
	}
</style>

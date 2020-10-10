<template>
	<footer class="footer border_brand_top">

		<Logo />

		<div class="horizontal_spacing slim menus">

			<div class="menu_footer">

				<div class="title">Latest articles</div>

				<div class="menu_posts" role="menu">

					<PostMenuLink
					v-for="edge in $page.links.edges"
					:key="edge.node.id"
					:post="edge.node"/>

				</div>

			</div>

			<div class="menu_footer">

				<div class="title"> About {{ $static.metadata.siteName }}</div>

				<div class="menu_about" role="menu">

					<g-link
				  class="menu_item about"
				  to="/about-us/"
					title="About us"
				  role="menuitem">
				    <div class="">About us</div>
				  </g-link>

				</div>


				<div class="menu_contacts" role="menu">

					<div class="menu_item">
						<a
						class="menu_item facebook external_link"
						role="menuitem"
						target="_blank"
						rel="noopener"
						href="https://web.facebook.com/magicgreen.junglestar.org"
						title="facebook">
							<span class="svg"><IcoFb /></span>
							<span>Fb:</span>
							<span class="user_name">magicgreen.junglestar.org</span>
						</a>
					</div>

					<div class="menu_item">
						<a
						class="menu_item instagram external_link"
						role="menuitem"
						target="_blank"
						rel="noopener"
						href="https://www.instagram.com/realmagicgreen"
						title="Intagram">
							<span class="svg"><IcoIg /></span>
							<span>Ig:</span>
							<span class="user_name">realmagicgreen</span>
						</a>
					</div>

					<div class="menu_item">
						<a
						class="menu_item email"
						role="menuitem"
						href="mailto:magicgreen@junglestar.org"
						title="email">
							<span class="svg"><IcoMail /></span>
							<span></span>
							<span class="user_name">magicgreen@junglestar.org</span>
						</a>
					</div>

					<div class="menu_item footer_icon qr_box">
						<span class="svg"><IcoQr /></span>
					</div>

				</div>

			</div>

		</div>

		<div class="horizontal_spacing copyright">
			Copyright © {{ new Date().getFullYear() }}.
			<br class="show_on_phones">Released under <a class="inline" rel="noopener" id="magicgreen-to-creativecommons" title="This license let others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials." href="https://creativecommons.org/licenses/by/4.0/">CC_BY license</a>. <br class="show_on_phones">
			Powered by <a class="inline" title="This website was designed and coded by the fabulous Junglestar" id="magicgreen-to-junglestar" rel="noopener" href="https://junglestar.org">Junglestar</a>
		</div>

		<div class="horizontal_spacing scroll_to_top center">
			<a href="#top" title="Jump to top of page">^</a>
		</div>

	</footer>
</template>

<static-query>
query {
	metadata {
    siteName
  }
	posts: allPost {
		edges {
			node {
				id
				title
				...on Post {
				id
				title
				path
				}
			}
		}
	}
}
</static-query>


<script>
import Logo from '~/components/Logo'
import PostMenuLink from '~/components/PostMenuLink.vue'
import IcoFb from '~/assets/svgs/facebook.svg'
import IcoIg from '~/assets/svgs/instagram.svg'
import IcoMail from '~/assets/svgs/email.svg'
import IcoQr from '~/assets/svgs/magicgreen-junglestar-org-qr-code-green.svg'

export default {
	props: {
    showLogo: { default: true }
  },
	components: {
    Logo,
		PostMenuLink,
		IcoFb,
		IcoIg,
		IcoMail,
		IcoQr
  }
}
</script>

<style lang="scss">
	.footer {
	  display: block;
	  padding: var(--space-2) 0;
	  width: 100%;
	  background-color:  var(--black);
	  color: var(--brand_color--dark);


		.menus {
			display: flex;
			flex-direction: column;
			@media only screen and (min-width: 880px) {
	      flex-direction: row;
				padding-left: 6rem;
	    }
		}

	  .title {
	    padding-top: var(--space-2);
	    padding-bottom: var(--space-05);
	    margin-bottom: var(--space-2);
	    border-bottom: 1px solid var(--brand_color--dark);
	    width: 100%;
	    text-transform: uppercase;
	    @media only screen and (min-width: 880px) {
	      border-bottom: 0 none;
	      width: auto;
	    }
	  }

	}

	.menu_footer {
	  width: 100%;
	  display: flex;
	  flex-direction: column;
	  @media only screen and (min-width:880px) {

	  }

	  .menu_item {
	    min-height: 42px;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
			align-items: center;
			border: transparent solid 1px;
			white-space: nowrap;
			color: var(--brand_color);
			text-decoration: none;
			margin-bottom: 3px;

			&:hover {
				text-decoration: none;
				border-bottom: currentColor solid 1px;
			}

	    &.active {
	      border-bottom: 0 none;
				padding-left: var(--space-1);
				padding-right: var(--space-1);
				border: var(--brand_color--dark) solid 1px;
	    }
	}

	  .email a span,
	  .other_website a span {
	    text-transform: none;
	  }
	}

	.menu_contacts,
	.menu_posts,
	.menu_about {
	  display: flex;
	  -ms-flex-direction: column;
	  flex-direction: column;
	  align-items: flex-start;
	}

	.menu_contacts,
	.menu_about {
		align-items: flex-start;
		.svg {
			//span
			padding-right: var(--space-05);
		}
	  > div {
	    min-height: 22px;
	    margin-bottom: var(--space-05);
	  }
	  .name {
	    color: black;
	  }
		.menu_item {
			//can be a link!
			&:not(.active):hover {
				border-bottom-color: transparent;
				.user_name {
					//the social profile name or email
					font-weight: 600!important;
				}
			}
		}

	}
	.menu_contacts {
		padding-top: 12px;
		.menu_item {
			align-items: flex-start;
		}
	}
	.menu_about .menu_item {
		&:not(.active):hover {
			border-bottom: currentColor solid 1px;
		}
	}



	.copyright {
	  font-size: 14px;
		text-align: center;
	  padding-top: var(--space-2);
	  margin-top: var(--space-2);
	}

	.scroll_to_top {
		margin-top: var(--space-2);
		a {
			width: 50px;
			height: 50px;
			font-size: 200%;
			font-weight: 300;
			border-radius: var(--radius);
			color: var(--brand_color);
			border: 2px solid var(--brand_color);
			&:hover {
				background-color: var(--tag_page_bg_color);
				color: var(--black);
				border: 2px solid var(--black);
			}
		}
	}
</style>

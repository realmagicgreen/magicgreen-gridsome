<template>
	<footer class="footer" role="contentinfo">

		<div class="container small flex flex_align_center flex_justify_center">
			<Logo />
		</div>

		<div class="container small menu_container">

			<div class="menu_footer">

				<div class="title">Latest articles</div>

				<div class="menu_posts" role="menu">

					<PostLink
					v-for="edge in $page.posts.edges"
					:key="edge.node.id"
					:post="edge.node"/>

				</div>

			</div>

			<div class="menu_footer">

				<div class="title"> About {{ $static.metadata.siteName }}</div>

				<div class="menu_contacts" role="menu">

					<div v-for="navItem in $static.metadata.footerNavigation" :key="navItem.name" class="menu_item">
						<g-link
							class="menu_item"
							role="menuitem"
							:to="navItem.link"
							:title="navItem.name"
							v-if="navItem.external!=true"
						>{{ navItem.name}} {{ navItem.username}}</g-link>
						<a
							class="menu_item"
							role="menuitem"
							rel="noopener"
							:href="navItem.link"
							target="_blank"
							:title="navItem.name"
							v-if="navItem.external==true"
						>{{ navItem.name}} {{ navItem.username}}</a>
					</div>

					<div class="menu_item footer_icon qr_box">
						<span></span>
					</div>

				</div>

			</div>

		</div>

		<div class="container small copyright">
			Copyright © {{ new Date().getFullYear() }}.
			<br class="show_on_phones">Released under <a class="inline" rel="noopener" id="magicgreen-to-creativecommons" title="This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials." href="https://creativecommons.org/licenses/by/4.0/">CC_BY license</a>. <br class="show_on_phones">
			Powered by <a class="inline" title="This website was designed and coded by the fabulous Junglestar" id="magicgreen-to-junglestar" rel="noopener" href="https://junglestar.org">Junglestar</a>
		</div>

	</footer>
</template>

<static-query>
query {
  metadata {
    siteName
		footerNavigation {
	    name
			username
	    link
	    external
	  }
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
import PostLink from '~/components/PostLink.vue'

export default {
  components: {
    Logo,
		PostLink
  }
}
</script>

<style lang="scss">

.footer {
  display: block;
  padding: var(--space) 0;
  width: 100%;
  background-color:  var(--black);
  color: var(--brand_color--dark);

	a:not(.button) {
		text-decoration: none;
		color: var(--brand_color);
	}

	.menu_container {
		display: flex;
		flex-direction: column;
		@media only screen and (min-width: 880px) {
      flex-direction: row;
    }
	}

  .title {
    padding-top: var(--space);
    padding-bottom: calc(var(--space)/3);
    margin-bottom: var(--space);
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

    &.active {
      border-bottom: 0 none;
			padding-left: var(--space-small);
			padding-right: var(--space-small);
			border: var(--brand_color--dark) solid 1px;
    }
}

  .email a span,
  .other_website a span {
    text-transform: none;
  }
}

.menu_contacts,
.menu_posts {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.menu_contacts {
  > div {
    min-height: 22px;
    margin-bottom: calc(var(--space)/4);
  }
  .name {
    color: black;
  }
}

.copyright {
  font-size: 14px;
	text-align: center;
  padding-top: var(--space);
  margin-top: var(--space);
}
</style>

<template>
	<footer class="footer"  role="contentinfo">
		<div class="container">
			<Logo />

			<div class="menu menu_footer">

				<div class="menu_posts" role="menu">
					<div class="title">Latest articles</div>

					<div class="post_link_block">
						<PostLink v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
					</div>

				</div>

				<div class="menu_contacts" role="menu">

					<div class="title">
						About {{ $static.metadata.siteName }}
					</div>

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
						<span>

						</span>
					</div>

				</div>

			</div>


			<div class="copyright">
				Copyright © {{ new Date().getFullYear() }}.
				<br class="show_on_phones">
			  Released under <a rel="noopener" id="magicgreen-to-creativecommons" title="This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials." href="https://creativecommons.org/licenses/by/4.0/">CC_BY license</a>. <br class="show_on_phones">
				Powered by <a title="This website was designed and coded by the fabulous Junglestar" id="magicgreen-to-junglestar" rel="noopener" href="https://junglestar.org">Junglestar</a>
		  </div>

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

  .container {
    -webkit-box-shadow: none;
            box-shadow: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    align-items: center;
  }

  .title {
    padding-top: var(--space);
    padding-bottom: calc(var(--space)/3);
    margin-bottom: calc(var(--space)/3);
    border-bottom: 1px solid var(--brand_color--dark);
    width: 100%;
    text-transform: uppercase;
    @media only screen and (min-width: var(--bp1Width)) {
      border-bottom: 0 none;
      width: auto;
    }
  }

}

.menu_footer {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  @media only screen and (min-width:var(--mediaBp1Width)) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    max-width: 700px;
  }

  .menu_item {
    min-height: 42px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;


    &.active {
      border-bottom: 0 none;

      span {
        padding: 5px;
        border: var(--brand_color--dark) solid 1px;
      }
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
  @media only screen and (min-width:var(--mediaBp1Width)) {
    max-width: 47%;
  }
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

.footer_company_name {
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-top: var(--space);
  margin-bottom: var(--space);
  text-align: center;
  @media only screen and (min-width:var(--mediaBp1Width)) {
    // width: 24%;
    text-align: left;
  }
}

.copyright {
  font-size: 14px;
  padding-top: var(--space);
  margin-top: var(--space);
}

.menu_item {

}

</style>

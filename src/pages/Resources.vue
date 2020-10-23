<template>
  <Layout :show-logo="true">

    <div class="resources">
      <h1 class="page_title center">
        Resources
      </h1>

      <div id="brands" class="responsive_table_block">

        <table class="green_pages_table responsive_table">

          <tbody class="list">
            <tr
            v-for="company in companies"
            :key="company.brand"
            :id="company.brand"
            class="green_pages_table_row"
            itemscope itemtype="http://schema.org/Organization">

              <!--01-->
              <td
              class="brand"
              data-th="Brand"
              itemprop="brand">{{ company.brand }}</td>

              <!--02-->
              <td
              class="products"
              data-th="Products"
              itemscope itemtype="http://schema.org/Product">
              {{ company.products }}</td>

              <!--03-->
              <td
              class="show_on_phones 1024 address"
              data-th="Address"
              itemscope itemtype="http://schema.org/PostalAddress">
              {{ company.address }}</td>

              <!--04-->
              <td
              class="show_on_phones 1024 country"
              data-th="Country"
              itemprop="addressLocality">
              {{ company.country }}</td>





              <!--05-->
              <td
              class="icon_only email"
              itemprop="email">
                <a
                  v-if="company.email"
                  class="sober_link"
                  title="email"
                  target="_blank"
                  :href="`mailto:${company.email}`">
                  <IcoMail />
                </a>
              </td>

              <!--06-->
              <td
              class="icon_only telephone"
              itemprop="telephone">
                <a
                  v-if="company.telephone"
                  class="sober_link"
                  target="_blank"
                  :title="`tel:+${company.telephone}`"
                  :href="`tel:+${company.telephone}`">
                  <IcoPhone />
                </a>
              </td>

              <!--07-->
              <td
              class="icon_only whatsapp"
              itemprop="whatsapp">
                <a
                  v-if="company.whatsapp"
                  class="sober_link"
                  target="_blank"
                  :title="`tel:+${company.whatsapp}`"
                  :href="`https:\/\/wa\.me/${company.whatsapp}`">
                  <IcoWhatsapp />
                </a>
              </td>

              <!--08-->
              <td
              class="icon_only location"
              itemprop="location">
                <a
                  v-if="company.location"
                  class="sober_link"
                  title="location"
                  target="_blank"
                  :href="`${company.location}`">
                  <IcoLocation />
                </a>
              </td>

              <!--09-->
              <td
              class="icon_only twitter"
              itemprop="twitter">
                <a
                  v-if="company.twitter"
                  title="twitter"
                  class="sober_link"
                  target="_blank"
                  :href="`https:\/\/twitter\.com\/${company.twitter}`">
                  <IcoTwitter />
                </a>
              </td>

              <!--10-->
              <td
              class="icon_only youtube"
              itemprop="youtube">
                <a
                  v-if="company.youtube"
                  title="twitter"
                  class="sober_link"
                  target="_blank"
                  :href="`https:\/\/youtube\.com\/${company.youtube}`">
                  <IcoYoutube />
                </a>
              </td>

              <!--11-->
              <td
              class="icon_only instagram"
              itemprop="instagram">
                <a
                  v-if="company.instagram"
                  title="instagram"
                  class="sober_link"
                  target="_blank"
                  :href="`https:\/\/instagram\.com\/${company.instagram}`">
                  <IcoInstagram />
                </a>
              </td>

              <!--12-->
              <td
              class="icon_only website"
              itemprop="website">
                <a
                  v-if="company.website"
                  title="website"
                  class="sober_link"
                  target="_blank"
                  :href="`${company.website}`">
                  <IcoLink />
                </a>
              </td>

            </tr>
          </tbody>

        </table>

      </div>
    </div>

  </Layout>
</template>

<page-query>
  query {
    links: allPost(filter: { published: { eq: true }}) {
      edges {
        node {
          id
          title
          ad
          path
        }
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
</page-query>

<script>
import companies from '~/assets/data/companies.yml'
import IcoMail from '~/assets/svgs/email.svg'
import IcoPhone from '~/assets/svgs/localphone.svg'
import IcoLink from '~/assets/svgs/link.svg'
import IcoLocation from '~/assets/svgs/location.svg'
import IcoInstagram from '~/assets/svgs/instagram.svg'
import IcoTwitter from '~/assets/svgs/twitter.svg'
import IcoYoutube from '~/assets/svgs/youtube.svg'
import IcoWhatsapp from '~/assets/svgs/whatsapp.svg'

export default {
  components: {
    IcoMail,
    IcoPhone,
    IcoLink,
    IcoLocation,
    IcoInstagram,
    IcoTwitter,
    IcoYoutube,
    IcoWhatsapp,
    companies
  },
  data() {
    return {
      companies
    }
  },
  metaInfo () {
    return {
      bodyAttrs: {
          class: 'resources'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  svg {
    stroke: var(--title_color);
  }

  .page_title {
  	@media screen and (min-width: 880px) {
  		display: none;
  	}
  }

</style>

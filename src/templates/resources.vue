<template>
  <Layout :show-logo="true">

    <div class="resources">
      <h1 class="show_on_phones 1024 center">
        Resources
      </h1>

      <Slogans />

      <div id="brands" class="responsive_table_block">

        <table class="green_pages_table responsive_table">

          <thead>
            <tr class="green_pages_table_header_row">
              <th class="table_header_brand maybe_vert"><span>Brand</span></th>
              <th class="table_header_product maybe_vert"><span>Products</span></th>
              <th class="hide"><span>Address</span></th>
              <th class="hide"><span>Counthy</span></th>
              <th class="table_header_mail maybe_vert"><span>Email</span></th>
              <th class="table_header_tel maybe_vert"><span>telephone</span></th>
              <th class="table_header_wa maybe_vert"><span>WhatsApp</span></th>
              <th class="table_header_map maybe_vert"><span>Map</span></th>
              <th class="table_header_twitter maybe_vert"><span>Twitter</span></th>
              <th class="table_header_youtube maybe_vert"><span>YouTube</span></th>
              <th class="table_header_ig maybe_vert"><span>Instagram</span></th>
              <th class="table_header_web maybe_vert"><span>Website</span></th>
            </tr>
          </thead>

          <tbody class="list">

              <tr
                v-for="company in companies"
                :key="company.brand"
                :id="company.brand"
                class="green_pages_table_row"
                itemscope itemtype="http://schema.org/Organization">

                <td class="brand" data-th="Brand" itemprop="brand">{{ company.brand }}</td>

                <td class="products" data-th="Products" itemscope itemtype="http://schema.org/Product">{{ company.products }}</td>

                <td class="show_on_phones 1024 address" data-th="Address" itemscope itemtype="http://schema.org/PostalAddress">{{ company.address }}</td>

                <td class="show_on_phones 1024 country" data-th="Country" itemprop="addressLocality">{{ company.country }}</td>

                <td
                class="email"
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

                <td
                class="telephone"
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

                <td
                class="whatsapp"
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




                <td
                class="location"
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


                <td
                class="twitter"
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

                <td
                class="youtube"
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

                <td
                class="instagram"
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

                <td class="website">
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
  metadata {
    settings {
      slogans {
        home
      }
    }
  }
}
</page-query>

<script>
import Slogans from '~/components/Slogans.vue'
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
    Slogans,
    IcoMail,
    IcoPhone,
    IcoLink,
    IcoLocation,
    IcoInstagram,
    IcoTwitter,
    IcoYoutube,
    IcoWhatsapp
  },
  data() {
    return {
      companies
    }
  }
  // ,
  // metaInfo () {
  //   return {
  //     title: this.$page.entry.title
  //   }
  // }
}

</script>

<style lang="scss" scoped>
  svg {
    stroke: var(--title_color);
  }


</style>

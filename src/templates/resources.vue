<template>
  <Layout :show-logo="true">

    <h1 class="show_on_phones center">
      Resources
    </h1>

    <!-- <Slogans /> -->

    <div id="brands" class="responsive_table_block">

      <div class="horizontal_spacing">

      <table class="green_pages_table responsive_table">

        <thead>
          <tr class="green_pages_table_header_row">
            <td class="table_header_brand">Brand</td>
            <td class="table_header_product">Products</td>
            <td class="hide">Address</td>
            <td class="hide">Country</td>
            <td>Email</td>
            <td>Tel</td>
            <td>Map</td>
            <td>IG</td>
            <td>Website</td>
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

              <td class="show_on_phones address" data-th="Address" itemscope itemtype="http://schema.org/PostalAddress">{{ company.address }}</td>

              <td class="show_on_phones country" data-th="Country" itemprop="addressLocality">{{ company.country }}</td>

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



export default {
  components: {
    IcoMail,
    IcoPhone,
    IcoLink,
    IcoLocation,
    IcoInstagram,
    IcoTwitter,
    IcoYoutube
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

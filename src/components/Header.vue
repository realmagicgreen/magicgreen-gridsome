<template>
	<header class="header">
		<div class="header__left">
			<Logo v-if="showLogo" />
		</div>

		<div class="header__right">
			<HeadMenu />
			<ToggleTheme />
		</div>
	</header>
</template>

<static-query>

</static-query>


<script>
import Logo from '~/components/Logo.vue'
import HeadMenu from '~/components/HeadMenu.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    HeadMenu,
    ToggleTheme
  }
}
</script>

<style lang="scss">
.header {
  background-color: var(--black);
  display: flex;
	flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 var(--space) var(--space) var(--space);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens, maybe...
    position: sticky;
    width: 100%;
		flex-direction: row;
  }
}

</style>

<template>
  <button
  aria-label="Toggle dark/light"
  @click.prevent="toggleTheme"
  class="toggle_theme"
  >
    <span v-if="darkTheme">
      <IcoSun />
    </span>
    <span v-else>
      <IcoMoon />
    </span>

  </button>
</template>

<script>
import IcoMoon from '~/assets/svgs/moon.svg'
import IcoSun from '~/assets/svgs/sun.svg'

export default {
  components: {
    IcoMoon,
    IcoSun
  },
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.darkTheme = true
  }
}
</script>

<style lang="scss">
.toggle_theme {
  min-width: 48px;
  min-height: 48px;
  background-color: transparent;
  border: 0;
  color: white;//var(--text_color);
  cursor: pointer;

  &:hover {
    opacity: .8
  }
  &:focus {
    outline: none;
  }
  svg {
    position: relative;
    top: 2px;
    @media screen and (min-width: 880px) {
      top: 0;
    }
  }
}
</style>

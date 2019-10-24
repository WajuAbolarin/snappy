<template>
  <div id="app">
    <AppHeader />
    <AppHero @search="search" key="search" />
    <router-view class="main" />
    <AppFooter class="footer" />
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppHero from '@/components/AppHero'

export default {
  name: 'Snappy',
  components: { AppHeader, AppFooter, AppHero },
  data() {
    return {
      ACTIVITY: null
    }
  },
  created() {
    this.$store.dispatch('getPopularPhotos')
  },
  methods: {
    async search(term) {
      if (term && this.$route.path != '/results') {
        this.$router.push({ path: '/results', query: { term, page: '1' } })
      }
    }
  }
}
</script>

<style lang="scss">
$colors: (
  'primary': orangered,
  'black': lighten(black, 20),
  'light': lighten(black, 30),
  'lighter': lighten(black, 70),
  'lightest': lighten(black, 80),
  'white': darken(white, 10),
  'secondary': #eee
);

.cursor {
  cursor: pointer;
}

$mid: 768px;
$desktop: 960px;

:root {
  @each $name, $color in $colors {
    --#{$name}: #{$color};
  }
  --mid: #{$mid};
  --desktop: #{$desktop};
}
@each $name, $color in $colors {
  .text-#{$name} {
    color: #{$color};
  }
}
.text-center {
  text-align: center;
}

a {
  color: inherit;
  text-decoration: none;
}
html {
  background: var(--secondary);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

#app {
  font-family: 'Josefin Sans', sans-serif;
  color: var(--black);
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .footer {
    justify-self: flex-end;
  }
  .main {
    flex: 1;
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Poppins', sans-serif;
}

.bounce-enter-active {
  animation: slideDown 0.3s;
}
.bounce-leave-active {
  opacity: 0;
  position: absolute;
  z-index: -10;
  animation: slideAway 0.2s;
}
.bounce-enter,
.bounce-leave-to {
  opacity: 0;
  width: 1;
  height: 1;
  transform: translate3d(0, -20px, 0);
}
.btn {
  width: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  max-width: 100px;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  border: 2px solid var(--lighter);
  background: white;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  &:hover,
  &:focus {
    background: var(--black);
    border-color: var(--black);
    color: var(--primary);
  }
}
@keyframes slideDown {
  0% {
    transform: translate3d(0, -2px, 0);
    opacity: 0.9;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideAway {
  10% {
    z-index: -10;
  }
  100% {
    opacity: 0;
  }
}
</style>

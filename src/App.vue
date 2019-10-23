<template>
  <div id="app">
    <AppHeader />
    <transition-group tag="div" name="bounce">
      <AppHero key="search" v-if="isHomePage" />
    </transition-group>
    <router-view />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppHero from "@/components/AppHero";

export default {
  name: "Snappy",
  components: { AppHeader, AppFooter, AppHero },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    }
  }
};
</script>

<style lang="scss">
$colors: (
  "primary": orangered,
  "black": lighten(black, 20),
  "light": lighten(black, 30),
  "lighter": lighten(black, 70),
  "lightest": lighten(black, 80),
  "white": darken(white, 10),
  "secondary": #eee
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
  font-family: "Josefin Sans", sans-serif;
  color: var(--black);
  position: relative;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
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

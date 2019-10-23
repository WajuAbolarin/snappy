<template>
  <nav class="nav">
    <img
      @click="$router.push('/')"
      src="@/assets/logo.svg"
      alt="snappy logo"
      class="nav__logo cursor"
    />
    <router-link to="/" tag="h1" class="nav__name cursor">Snappy</router-link>
  </nav>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  color: rgb(236, 233, 233);
  max-height: 5em;

  &__logo {
    max-width: 2.5em;
    margin-right: 0.5em;
    margin-top: 0.5em;
  }
  &__name {
    font-size: 2em;
    font-family: "Josefin Sans";
    text-transform: uppercase;
    text-shadow: 2px 4px 4px rgba(black, 0.2);
  }
}
</style>

<template>
  <footer class="text-center">
    <p>
      Powered by
      <a href="//pexels.com">
        <img class="pexels" target="__blank" src="@/assets/pexels.png" alt />
      </a>
    </p>
    <p>&copy; 2019</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  display: grid;
  margin-top: 2em;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  height: 7em;
  color: var(--lighter);
  .pexels {
    width: 3rem;
  }
}
</style>

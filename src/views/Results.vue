<template>
  <main>
    <ResultsGrid title="Results for Home" :popular="popular" />
    <div class="pagination">
      <button class="icon">
        &larr;
        previous
      </button>
      <button class="icon">next &rarr;</button>
    </div>
  </main>
</template>

<script>
import popular from '@/fixtures/popular'
import ResultsGrid from '@/components/ImageGrid'

export default {
  name: 'home',
  components: { ResultsGrid },
  data: () => ({
    popular
  }),
  beforeRouteEnter(_, from, next) {
    if (!from.name) {
      next('/')
      return
    }
    next()
  }
}
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  bottom: 1em;
  width: 20em;
  margin-right: 1em;
  margin-left: auto;
  .icon {
    width: 10em;
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
  .next {
    transform: rotate3d(0, 180, 0, 180deg);
  }
  justify-content: space-between;
}
</style>
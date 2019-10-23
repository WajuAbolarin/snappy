<template>
  <main>
    <div class="results">
      <Pagination
        @next="fetchPage(Number(page) + 1)"
        @previous="fetchPage(Number(page) - 1)"
        :pages="pages"
        :page="page"
        :stats="stats"
        :hasNext="hasNext"
      />
      <ResultsGrid :title="`showing results for ${term}`" :popular="photos" />
      <Pagination
        @next="fetchPage(Number(page) + 1)"
        @previous="fetchPage(Number(page) - 1)"
        :pages="pages"
        :page="page"
        :stats="stats"
        :hasNext="hasNext"
      />
    </div>
  </main>
</template>

<script>
import ResultsGrid from '@/components/ImageGrid'
import Pagination from '@/components/Pagination'

export default {
  name: 'Results',
  components: { ResultsGrid, Pagination },
  data: () => ({
    term: '',
    page: ''
  }),
  beforeRouteEnter(to, from, next) {
    let {
      query: { term }
    } = to
    if (!term) {
      return next('/')
    }
    next()
  },
  created() {
    let {
      query: { term, page }
    } = this.$route
    this.runSearch({ page, term })
  },
  computed: {
    photos() {
      let photos = this.$store.getters[`getPhotosForPage`]({
        page: this.page,
        term: this.term
      })

      return photos
    },
    stats() {
      return this.$store.getters.stats
    },
    pages() {
      return Math.ceil((this.stats.total_results || 1) / this.stats.per_page)
    },
    hasNext() {
      return Boolean(this.stats.next_page)
    }
  },
  methods: {
    runSearch({ term, page }) {
      this.page = page
      this.term = term
      this.$store.dispatch('search', { term, page })
    },
    fetchPage(page) {
      history.pushState(
        '',
        `Search for + ${this.term}| ${page}`,
        `/results?term=${this.term}&page=${page}`
      )
      this.runSearch({ term: this.term, page })
    }
  }
}
</script>
<style lang="scss" scoped>
.results {
  max-width: 100em;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 6em 1fr 5em;
  margin: 0 auto;
}
</style>

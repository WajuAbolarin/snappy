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
      <transition name="slideRight" appear mode="out-in">
        <div v-if="ACTIVITY">
          <h2 class="text-center">. . .</h2>
        </div>
        <div key="empty" v-else-if="!photos">
          <h4 class="text-centerctext-light">
            Oops! we couldn't find any photos for the term
            <small>{{ term }}</small>
          </h4>
          <img class="empty-img" src="@/assets/empty.svg" alt />
        </div>
        <ResultsGrid v-else key="results" :popular="photos" />
      </transition>
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
import ResultsGrid from "@/components/ImageGrid";
import Pagination from "@/components/Pagination";
import { emptyPhotos } from "@/utils";

export default {
  name: "Results",
  components: { ResultsGrid, Pagination },
  data: () => ({
    term: "",
    page: "",
    ACTIVITY: null
  }),
  beforeRouteEnter(to, from, next) {
    let {
      query: { term }
    } = to;
    if (!term) {
      return next("/");
    }
    next();
  },
  created() {
    let {
      query: { term, page }
    } = this.$route;
    this.runSearch({ page, term });
  },
  computed: {
    photos() {
      let photos = this.$store.getters[`getPhotosForPage`]({
        page: this.page,
        term: this.term
      });

      return photos;
    },
    stats() {
      return this.$store.getters.stats;
    },
    pages() {
      return Math.ceil((this.stats.total_results || 1) / this.stats.per_page);
    },
    hasNext() {
      return Boolean(this.stats.next_page);
    }
  },
  methods: {
    async runSearch({ term, page }) {
      this.ACTIVITY = "FETCHING";
      this.page = page;
      this.term = term;
      try {
        await this.$store.dispatch("search", { term, page });
      } catch (e) {
        console.warn(e);
      } finally {
        this.ACTIVITY = null;
      }
    },
    fetchPage(page) {
      history.pushState(
        "",
        `Search for + ${this.term}| ${page}`,
        `/results?term=${this.term}&page=${page}`
      );
      this.runSearch({ term: this.term, page });
    },
    emptyPhotos
  }
};
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
.empty-img {
  width: 14em;
  display: block;
  margin: 0 auto;
}
.slideRight-enter-active,
.slideRight-leave-active {
  transition: all 0.3s ease-in-out;
  opacity: 0.5;
}
.slideRight-enter,
.slideRight-leave-to {
  opacity: 0;
}
</style>

import { makeRequest } from "@/utils";

import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    term: "",
    stats: {},
    results: {},
    popular: []
  },
  mutations: {
    SET_STATS(state, stats) {
      state.stats = stats;
    },
    SET_TERM(state, term) {
      state.term = term;
    },

    SET_PAGE(state, page = 1) {
      state.currentPage = page;
    },

    SET_RESULTS(state, { page, term, results }) {
      Vue.set(state.results, `${term}-${page}`, results);
    },
    SET_POPULAR(state, popular) {
      state.popular = popular;
    }
  },
  actions: {
    async search({ commit, getters }, { page = 1, term } = {}) {
      let cache = getters.getPhotosForPage({ page, term });
      if (cache) {
        return Promise.resolve(true);
      }
      try {
        let results = await makeRequest(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(
            term
          )}&per_page=20&page=${page}`
        );
        let { photos, ...stats } = results;
        commit("SET_RESULTS", { results: photos, page, term });
        commit("SET_STATS", stats);
      } catch (e) {
        throw e;
      }
    },
    async getPopularPhotos({ commit }) {
      try {
        let results = await makeRequest(
          `https://api.pexels.com/v1/curated?per_page=15&page=1`
        );
        commit("SET_POPULAR", results.photos);
      } catch (e) {
        throw e;
      }
    }
  },
  getters: {
    popularPhotos(state) {
      return state.popular;
    },
    stats(state) {
      return state.stats;
    },
    getPhotosForPage: state => ({ page, term }) => {
      return state.results[`${term}-${page}`];
    }
  }
});

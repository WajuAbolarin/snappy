<template>
  <section class="hero">
    <transition name="slideRight" appear>
      <form
        @submit.prevent="$emit('search', term)"
        class="search-form"
        v-show="page === '/'"
      >
        <div class="search">
          <input
            v-model="term"
            placeholder="Search for a photo"
            autofocus
            type="text"
            class="search-form__input"
          />
          <button type="submit" class="search-form__submit">
            <img src="@/assets/search.svg" alt />
            <small class="text-light">Search</small>
          </button>
        </div>
        <small class="helper text-lighter">
          eg.
          <span class="text-white">{{ suggestions }}</span>
        </small>
      </form>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppHero",
  data: () => ({
    term: "",
    words: [
      "home",
      "happy",
      "friend",
      "work",
      "technology",
      "cregital",
      "family",
      "people",
      "creative"
    ]
  }),
  computed: {
    suggestions() {
      return this.words.slice(0, 5).join(", ");
    },
    page() {
      return this.$route.path;
    }
  }
};
</script>
<style lang="scss" scoped>
.hero {
  height: 18em;
  width: 100%;
  background: linear-gradient(to bottom, rgba(black, 0.2), rgba(black, 0.7)),
    url("../assets/banner2.jpg") center center;
  background-size: cover;
  display: grid;
  place-items: center;
  transition: transform 3s linear;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  border-bottom: 10px solid var(--lighter);

  @media (min-width: 960px) {
    min-height: 50vh;
  }
  .search-form {
    z-index: inherit;
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    max-width: 50em;
    height: 6em;

    @media (min-width: 768px) {
      height: 7em;
    }

    .search {
      display: grid;
      grid-template-columns: 70% 1fr;
      margin-bottom: 0.6em;
    }
    &__input {
      background: white;
      border: 0;
      text-indent: 1em;
    }

    &__submit {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      cursor: pointer;
      background: white;
      border-left: 1px solid var(--lighter);
      transition: all 0.3s ease-in-out;
      &:hover {
        background: var(--secondary);
      }
      img {
        width: 1em;
        margin-right: 0.5em;
        @media (min-width: 768px) {
          width: 1.5em;
        }
      }
    }
  }
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

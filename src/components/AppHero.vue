<template>
  <section class="hero">
    <form @submit.prevent="$router.push('/results')" class="search-form">
      <div class="search">
        <input
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
  </section>
</template>

<script>
export default {
  name: "AppHero",
  data: () => ({
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
    }
  }
};
</script>
<style lang="scss" scoped>
.hero {
  height: 18em;
  width: 100%;
  background: linear-gradient(to bottom, rgba(black, 0.2), rgba(black, 0.7)),
    url("../assets/banner.jpg") center center;
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
</style>

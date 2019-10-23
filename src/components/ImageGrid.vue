<template>
  <section class="popular">
    <h3 v-if="title" class="title text-center text-light">{{title}}</h3>
    <div class="popular-gallery">
      <LazyImage
        v-for="img in popular"
        :img="img"
        :key="img.id"
        class="gallery__item"
      />
    </div>
  </section>
</template>

<script>
import LazyImage from './LazyImage.vue'

export default {
  name: 'ImageGrid',
  props: {
    popular: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    LazyImage
  }
}
</script>
<style lang="scss" scoped>
.popular {
  z-index: 1;
  padding-top: 1em;
  max-width: 100em;
  margin: 0 auto;
}
.popular-gallery {
  display: grid;
  grid-template-columns: 1fr;
  margin: 2em 1em;
  grid-auto-rows: 23em;
  grid-row-gap: 3em;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 20em;
    grid-column-gap: 2em;
    margin: 3em 1em;
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 20em;
    grid-column-gap: 2em;
  }
}
</style>

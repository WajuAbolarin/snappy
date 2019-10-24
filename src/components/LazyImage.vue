<template>
  <div class="gallery__item">
    <img :src="src" loading="lazy" ref="img" class="gallery__img" />
    <p class="gallery__attribution text-light">
      By
      <a
        class="text-lighter loading"
        :href="img.photographer_url"
        target="__blank"
        >{{ img.photographer }}</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "LazyImage",
  props: {
    img: {
      type: Object,
      default: () => ({})
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showing: false
    };
  },
  computed: {
    src() {
      return this.preview ? this.img.src.large2x : this.img.src.large;
    }
  },
  mounted() {
    if ("IntersectionObserver" in window) {
      let Observer = new IntersectionObserver(
        entries => {
          let image = entries[0];
          if (image.isIntersecting) {
            let img = new Image();
            img.onload = () => {
              this.$refs.img.src = this.img.src.large;
              this.$refs.img.setAttribute(
                "alt",
                `photograph by ${this.img.photographer}`
              );
            };
            this.showing = true;
            img.src = this.img.src.large;
          }
        },
        { rootMargin: "10px", threshold: 0.5 }
      );
      Observer.observe(this.$el);
    } else {
      this.showing = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.gallery__item {
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 90% 1fr;
  border-bottom: 1px solid var(--lightest);
  &:focus,
  &:focus-within {
    outline: none;
    background: none;
  }
  @media (min-width: 768px) {
    &:hover .gallery__img {
      transform: scale(1.1);
      cursor: pointer;
      box-shadow: 0px 4px 10px 0px rgba(black, 0.2);
    }
  }
  .gallery__img {
    width: 100%;
    height: 88%;
    object-fit: cover;
    object-position: center center;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1);
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;

    &:empty {
      display: block;
      width: 30em;
      height: 88%;
      background: rgba(black, 0.05);
    }
  }
}
</style>

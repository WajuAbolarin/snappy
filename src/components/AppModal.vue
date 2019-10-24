<template>
  <div class="modal" role="document" v-if="show">
    <transition name="slideUp" appear>
      <div class="modal__content" :key="show">
        <div class="preview">
          <img
            :src="img.src.large2x"
            loading="lazy"
            ref="img"
            class="gallery__img"
          />
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
        <div class="modal__actions">
          <button
            type="button"
            class="btn link"
            @click="$emit('update:show', false)"
          >
            Close
          </button>
          <a
            :href="img.src.original"
            target="__blank"
            class="btn previous"
            download
            >Download</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    img: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(black, 0.9);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  @media (min-width: 960px) {
    align-items: center;
    justify-content: center;
  }
  &__content {
    overflow: hidden;
    background: var(--secondary);
    max-height: 27em;
    height: 27em;
    width: 100%;
    border-top: 10px solid var(--primary);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5em;
    padding: 1em;
    @media (min-width: 960px) {
      width: 70%;
      max-width: 50em;
      height: 40em;
    }
  }
  .preview {
    overflow: hidden;
    height: 90%;
  }
  &__actions {
    display: flex;
    justify-content: flex-end;
    padding-top: 1em;
  }
  .btn:nth-child(1) {
    margin-right: 1em;
  }
  .btn.link {
    border: 0;
    background: none;
    text-decoration: underline;
    padding-top: 0.5em;
  }
  .gallery__img {
    object-fit: cover;
    object-position: center center;
    &:empty {
      display: block;
      width: 100%;
      height: 88%;
      background: rgba(black, 0.05);
    }
  }
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 0.3s ease-in-out;
}
.slideUp-enter,
.slideUp-leave-to {
  transform: translate3d(0, 100px, 0);
  opacity: 0;
}
</style>

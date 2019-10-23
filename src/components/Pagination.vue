<template>
  <div class="pagination top">
    <button
      v-if="page > 1"
      type="button"
      class="icon previous"
      @click="$emit('previous')"
    >
      &larr; previous
    </button>
    <div class="stats">
      <small>{{ page || "-" }} / {{ pages || "-" }}</small>
    </div>
    <button
      type="button"
      class="icon next"
      @click="$emit('next')"
      v-if="hasNext"
    >
      next &rarr;
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    stats: {
      type: Object,
      required: true
    },
    page: {
      type: [Number, String],
      required: true
    },
    pages: {
      type: Number,
      required: true
    },
    hasNext: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  bottom: 1em;
  width: 20em;
  margin: 1em;
  @media (min-width: 768px) {
    margin-left: auto;
  }
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
  .previous {
    grid-col: 1/2;
  }
  .next {
    grid-column: 3/-1;
  }
  justify-content: space-between;
}
.top {
  margin-top: 3em;
}
.stats {
  grid-column: 2/3;
  text-align: center;
}
</style>

<template>
  <div class="pagination top">
    <button
      v-if="page > 1"
      type="button"
      class="btn previous"
      @click="$emit('previous')"
    >
      &larr; previous
    </button>
    <div class="stats">
      <small>{{ page || "-" }} / {{ pages || "-" }}</small>
    </div>
    <button
      type="button"
      class="btn next"
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

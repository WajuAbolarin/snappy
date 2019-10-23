<template>
  <main>
    <AppPopular id="popular" title="Popular Photos" :popular="popular" />
  </main>
</template>

<script>
import AppPopular from "@/components/ImageGrid";

import { emptyPhotos } from "@/utils";

export default {
  name: "home",
  components: { AppPopular },
  computed: {
    popular() {
      let popular = this.$store.getters[`popularPhotos`];
      if (popular.length === 0) {
        popular = emptyPhotos(5);
      }
      return popular;
    }
  }
};
</script>

<template>
  <main>
    <AppPopular id="popular" title="Popular Photos" :popular="popular" />
  </main>
</template>

<script>
import popular from '@/fixtures/popular'
import AppPopular from '@/components/ImageGrid'

export default {
  name: 'home',
  components: { AppPopular },
  data: () => ({
    popular
  }),
  mounted() {
    // fetch(`https://api.pexels.com/v1/search?query=home&per_page=15&page=1`, {
    //   headers: {
    //     Authorization: `563492ad6f91700001000001c73261beb943431d9126241df217f1ef`
    //   }
    // })
    //   .then(res => res.json())
    //   .then(console.log)
  }
}
</script>

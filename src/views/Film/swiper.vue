<template>
  <div class="swiper-container film-container">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.film-container', {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}

</script>
<style scoped>
</style>

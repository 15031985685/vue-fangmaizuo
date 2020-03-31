<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  props: ['perview', 'myclass'],
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.' + this.myclass, {
      loop: true,
      slidesPerView: this.perview,
      spaceBetween: 10,
      freeMode: true
    })
  }
}

</script>

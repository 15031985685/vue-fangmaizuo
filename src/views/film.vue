<template>
  <div>
    <swiper :key="bannerList.length" ref="mySwiper">
      <div v-for="data in bannerList" :key="data.bannerId" class="swiper-slide">
        <img :src="data.imgUrl" alt="">
      </div>
    </swiper>
    <film-navbar :class="isfixed ? 'fixed' : ''"></film-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import FilmNavBar from '@/components/filmNavBar'
import Swiper from '@/views/Film/swiper'
import axios from 'axios'
export default {
  data () {
    return {
      bannerList: [],
      isfixed: false
    }
  },
  components: {
    'film-navbar': FilmNavBar,
    swiper: Swiper
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=310100&k=2838900',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584584864798863918254","bc":"310100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(ref => {
      this.bannerList = ref.data.data
    })
    window.onscroll = this.handleScrool
  },
  beforeDestroy () {
    // console.log("beforeDestroy")
    window.onscroll = null
  },
  methods: {
    handleScrool () {
      if (document.documentElement.scrollTop >= this.$refs.mySwiper.$el.offsetHeight) {
        this.isfixed = true
      } else {
        this.isfixed = false
      }
    }
  }
}

</script>
<style scoped>

</style>

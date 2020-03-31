<template>
  <div>
    <header>
      <back class="back"></back>

      <span class="chooseCity" @click="hadleCity">影院( {{cityname}} )</span>
    </header>
    <div class="cinemaBox" :style="mystyle">
      <ul v-if="cinemaList">
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <h2>{{data.name}}</h2>
          <p>{{data.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import back from '@/components/back'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      cinemaList: '',
      cityname: '',
      mystyle: {
        height: '0px'
      }
    }
  },
  mounted () {
    this.mystyle.height = document.documentElement.clientHeight - 102 + 'px'
    let cid = ''
    if (localStorage.getItem('cityId')) {
      cid = localStorage.getItem('cityId')
      this.cityname = localStorage.getItem('cityName')
    } else {
      cid = 310100
      this.cityname = '上海'
    }
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${cid}&ticketFlag=1&k=3476792`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584584864798863918254","bc":"310100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cinemaList = res.data.data.cinemas
      this.$nextTick(() => {
      /* eslint-disable no-new */
        new BScroll('.cinemaBox', {
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          }
        })
      })
    })
  },
  components: {
    back
  },
  methods: {
    hadleCity () {
      this.$router.push('/city')
    }
  }
}

</script>
<style scoped lang="scss">
header{
  position: relative;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #333;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  .back{
    position: absolute;
    left: 15px;
    top: 0;
    span{
      font-size: 24px;
    }
  }
}
li{
  border-bottom: 1px solid #eee;
  padding: 15px 20px;
  p{
    font-size: 12px;
    color: #999;
  }
}
.cinemaBox{
  height: 400px;
  overflow: hidden;
  position: relative;
}
</style>

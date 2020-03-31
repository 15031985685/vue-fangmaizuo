<template>
  <div v-if="data" class="detail">
    <header>
      <img :src="data.poster" alt="">
      <back class="header-back"></back>
    </header>
    <section>
      <h2 class="clearfix">
        <span class="film-name">{{data.name}}</span>
        <span class="film-num">{{data.grade}}分</span>
      </h2>
      <p class="type">{{data.category}}</p>
      <p>{{data.nation}}</p>
      <div class="message">{{data.synopsis}}</div>
    </section>
    <div class="actor action">
      <h2>演员表</h2>
      <div v-if="data.actors">
        <swiper :key="data.actors.length" class="autor-swiper" myclass="autor-swiper" perview="4">
          <div class="swiper-slide" v-for="actor in data.actors" :key="actor.name">
            <div class="photo">
              <img :src="actor.avatarAddress" alt="">
            </div>
            <h4>{{actor.name}}</h4>
            <p>{{actor.role}}</p>
          </div>
        </swiper>
      </div>
      <div v-else class="empty-text">
        暂无演职人员
      </div>
    </div>
    <div class="action still">
      <h2>剧照</h2>
      <div v-if="data.photos">
        <swiper :key="data.photos.length" class="photo-swiper" myclass="photo-swiper" perview="2">
          <div class="swiper-slide" v-for="(photo,index) in data.photos" :key="index">
            <div class="photo">
              <img :src="photo" alt="">
            </div>
          </div>
        </swiper>
      </div>
      <div v-else class="empty-text">
        暂无剧照
      </div>
    </div>
    <button class="submit" @click="handleBuy">选座购票</button>
  </div>
</template>

<script>
import axios from 'axios'
import swiper from '@/views/Detail/detailSwiper'
import back from '@/components/back'
import { MessageBox } from 'mint-ui'
// import bus from '@/bus'
export default {
  data () {
    return {
      data: ''
    }
  },
  props: ['id'],
  beforeMount () {
    // bus.$emit('maizuo',false)
    this.$store.commit('hideTabber', false)// 第一个参数就是mutation名字
  },
  mounted () {
    const id = this.$route.params.id
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${id}&k=9337726`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584584864798863918254","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.data = res.data.data.film
    })
  },
  beforeDestroy () {
    // bus.$emit('maizuo',true)
    this.$store.commit('showTabber', true)// 第一个参数就是mutation名字
  },
  methods: {
    handleBuy () {
      if (window.localStorage.loginInfo) {
        alert('购票成功')
      } else {
        MessageBox.confirm('即将跳往登录界面是否继续?').then(action => {
          const url = this.$route.path
          this.$router.push({ name: '/login', params: { userId: url } })
        })
      }
    }
  },
  components: {
    swiper,
    back
  }
}

</script>
<style scoped lang="scss">
.detail{
  background: #f5f5f5;
  padding-bottom: 80px;
  header{
    position: relative;
  }
}
section{
     font-size: 13px;
    color: #797d82;
      padding: 15px;
    padding-top: 12px;
    background-color: #fff;
    .film-name{
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
  }
  .film-num{
    float: right;
    color: #ffb232;
  }
  .type{
    margin-top: 4px;
  }
}
.action{
  margin-top: 15px;
  background: #fff;
  padding: 15px;
  padding-top: 12px;
  h2{
    font-size: 16px;
    text-align: left;
    color: #191a1b;
    margin-bottom: 15px;
  }
  .empty-text{
    height: 170px;
    line-height: 70px;
    font-size: 14px;
    color: #bdc0c5;
    margin: auto;
    text-align: center;
  }
  .swiper-slide{
    text-align: center;
  }
  .photo{
    height: 85px;
    overflow: hidden;
  }
}
.still{
  .swiper-slide{
    background: #f5f5f5;
    max-height: 210px;
    overflow: hidden;
    position: relative;
  }
  .photo{
    img{
      vertical-align: middle;
    }
  }
}

.submit{
  border: none;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 49px;
  width: 100%;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
  z-index: 99;
}

</style>

<template>
  <div class="myCenter">
    <div class="header">
      <div class="swiper">
        <mt-swipe :auto="0" :showIndicators="false" >
          <mt-swipe-item v-for="(data,index) in photoList" :key="index"><img :src="data" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
        <h2>{{username}}</h2>
    </div>
    <div class="body">
      <ul>
        <li>
          <i class="iconfont icon-dingdan"></i>
          <span>订单信息</span>
        </li>
        <li>
          <i class="iconfont icon-shoucang"></i>
          <span>收藏</span>
        </li>
        <li>
          <i class="iconfont icon-qiabao"></i>
          <span>卡包</span>
        </li>
        <li>
          <button class="logout" @click="handleLogout">退出登录</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ban1 from '@/images/ban1.jpg'
import ban2 from '@/images/ban2.jpg'
import ban3 from '@/images/ban4.jpg'
export default {
  data () {
    return {
      username: '用户名',
      photoList: [ban1, ban2, ban3]
    }
  },
  mounted () {
    const userInfo = window.localStorage.getItem('loginInfo')
    const userInfoArray = userInfo.split(',')
    this.username = userInfoArray[0]
  },
  methods: {
    handleLogout () {
      window.localStorage.removeItem('loginInfo')
      this.$router.go(0)
    }
  }
}

</script>
<style scoped lang="scss">
  .myCenter{
    background: #f5f5f5;
    min-height: 100vh;
  }
  .header{
    width: 100%;
    height: 150px;
    position: relative;
    text-align: center;
    background: linear-gradient(pink, white);
    h2{
      font-size: 24px;
      position: relative;
      z-index: 99;
      top: 50px;
      color: #fff;
    }
    .mint-swipe{
      width: 100%;
      height: 150px;
      position: absolute;
      img{
        height: 150px;
      }
    }
  }
  .body{
    margin-top:15px ;
    background: #fff;
    li{
      width: 100%;
      border-bottom: 1px solid #eee;
      line-height: 38px;
      i{
        padding:0 5px 0 15px ;
      }
      span{
        font-size: 14px;
        color: #666;
      }
      .logout{
        display: block;
        width: 100%;
        height: 38px;
        border: none;
        background: rgb(152, 206, 25);
        color: #ff0000;
      }
    }
  }
</style>

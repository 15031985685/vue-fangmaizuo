<template>
  <div>
      <ul>
        <!-- 声明式导航 -->
        <router-link to="/film/nowplaying" tag="li" activeClass="actived">正在热映</router-link>
        <router-link to="/film/comingsoon" tag="li" activeClass="actived">即将上映</router-link>
      </ul>
  </div>
</template>

<script>
export default {

}

</script>
<style scoped>
 ul {
    width: 80%;
    height: 50px;
    margin: 0 auto 15px;
  }
  ul li{
    background: none;
    color: #333;
    width: 50%;
    line-height: 50px;
    text-align: center;
    float: left;
  }
  ul li.actived{
    color: red;
    font-weight: 500;
    position: relative;
  }
  ul li.actived::after{
    content: '';
    width: 80%;
    height: 2px;
    background: red;
    position: absolute;
    left: 10%;
    bottom: 0;
  }
  .fixed{
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
  }
</style>

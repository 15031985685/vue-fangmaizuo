<template>
  <nav>
      <ul>
          <!-- 声明式导航 -->
          <router-link to="/film" tag="li" activeClass="active">
            <i class="iconfont icon-dianying"></i>
            电影
          </router-link>
          <router-link to="/cinema" tag="li" activeClass="active">
            <i class="iconfont icon-yingyuan"></i>
            影院
          </router-link>
          <router-link to="/center" tag="li" activeClass="active">
            <i class="iconfont icon-gerenzhongxin"></i>
            我的
          </router-link>
      </ul>
  </nav>
</template>

<script>
export default {

}

</script>
<style scoped>
    nav{
        position: fixed;
        left: 0;
        bottom: 0;
        height: 52px;
        width: 100%;
    }
    ul li{
        background: #ccc;
        border-bottom:1px solid #ff0000 ;
        float: left;
        width: 33.3%;
        line-height: 52px;
        text-align: center;
    }
    ul li.active{
        background: #ff0000;
    }
</style>

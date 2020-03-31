<template>
  <div>
    <ul>
      <li class="movieList clearfix" v-for="data in comingsoon.comingsoonList" :key="data.filmId" @click="handleClick(data.filmId)">
        <div class="img fl">
          <img :src="data.poster" alt="">
        </div>
        <div class="fl message">
          <h4>{{data.name}}</h4>
          <p>主演：<span class="actor">{{data.actors | actorfilter}}</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

Vue.filter('actorfilter', function (data) {
  if (!data === true) {
    return '暂无主演'
  }
  var newList = data.map(item => item.name)
  return newList.join(',')
})
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    if (this.comingsoon.comingsoonList.length === 0) {
      this.$store.dispatch('comingsoonActions')
    }
  },
  methods: {
    handleClick (id) {
      // 编程式路由
      this.$router.push(`/detail/${id}`)
    }
  },
  computed: {
    ...mapState(['comingsoon'])
  }
}

</script>
<style scoped lang="scss">
  .movieList{
    width: 95%;
    margin: 10px auto;
    img{
      max-width: 100%;
    }
    .img{
      width: 66px;
      height: 94px;
      background: rgb(249, 249, 249);
    }
    .message{
      width: calc(100% - 116px);
      padding: 0 10px;
    }
    .actor{
      font-size: 12px;
      color: #666;;
    }
  }
</style>

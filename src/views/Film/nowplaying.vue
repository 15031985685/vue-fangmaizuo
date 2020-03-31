<template>
  <div class="cont">
    <ul
     v-infinite-scroll="loadMore"
     infinite-scroll-immediate-check=false
     infinite-scroll-distance="10">
      <li class="movieList clearfix" v-for="data in nowplay.nowplayingList" :key="data.filmId" @click="handleClick(data.filmId)">
        <div class="img fl">
          <img :src="data.poster" alt="">
        </div>
        <div class="fl message">
          <h4>{{data.name}}</h4>
          <p>观众评分{{data.grade}}</p>
          <p>主演：<span class="actor">{{data.actors | actorfilter}}</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { Toast } from 'mint-ui'
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
      list: [],
      pageNum: 1
    }
  },
  mounted () {
    if (this.nowplay.nowplayingList.length === 0) {
      this.$store.dispatch('nowplayingActions', this.pageNum)
    }
  },
  methods: {
    handleClick (id) {
      // 编程式路由
      this.$router.push(`/detail/${id}`)
    },
    loadMore () {
      if (this.nowplay.nowplayingList.length === this.nowplay.pageTotal) {
        Toast('到底了')
      } else {
        this.pageNum++
        this.$store.dispatch('nowplayingActions', this.pageNum)
      }
    }
  },
  computed: {
    ...mapState(['nowplay'])
  }
}

</script>
<style scoped lang="scss">
.cont{
  padding-bottom: 54px;
}
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

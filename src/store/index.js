import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Indicator } from 'mint-ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    nowplay: { // 正在热映
      nowplayingList: [],
      pageTotal: ''
    },
    comingsoon: { // 即将上映
      comingsoonList: [],
      pageTotal: ''
    }
  },
  mutations: {
    showTabber (state, data) {
      state.isTabbarShow = data
    },
    hideTabber (state, data) {
      state.isTabbarShow = data
    },
    nowplayingMutations (state, data) {
      state.nowplay.nowplayingList = state.nowplay.nowplayingList.concat(data.films)
      state.nowplay.pageTotal = data.total
    },
    comingsoonMutations (state, data) {
      state.comingsoon.comingsoonList = state.comingsoon.comingsoonList.concat(data.films)
      state.comingsoon.pageTotal = data.total
    }
  },
  actions: {
    nowplayingActions (store, num) {
      Indicator.open('加载中...')
      // console.log(num)
      axios({
        url: `https://m.maizuo.com/gateway?cityId=310100&pageNum=${num}&pageSize=7&type=1&k=8567237`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584584864798863918254","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        Indicator.close()
        store.commit('nowplayingMutations', res.data.data)
      })
    },
    comingsoonActions (store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=8433207',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584584864798863918254","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        store.commit('comingsoonMutations', res.data.data)
      })
    }
  },
  modules: {
  }
})

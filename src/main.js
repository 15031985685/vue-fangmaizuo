import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

// es6 两种导入方法
// import AllObj from './module/moduleB'
// import { A1 as myA1, A2 } from './module/moduleA'
Vue.use(Mint)
// console.log('ES6引入方法' + AllObj)
// console.log('ES6引入方法' + myA1 + '---' + A2)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

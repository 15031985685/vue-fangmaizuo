<template>
  <div id="app">
    <!-- hello Vue
    <br>
    <input type="text" v-model="mytext">
    <button @click="handleAdd">add</button>
    <ul>
      <li v-for="data in dataList" :key="data">{{data}}</li>
    </ul>
    <nav-bar>
      <button @click="isShow = !isShow">显示slideBar</button>
    </nav-bar>
    <slide-bar v-show="isShow"></slide-bar>
    <button @click="handleClick">发起请求</button>
    <hr>
    <h4>路由</h4> -->

    <!-- 第一种路由控制显示 -->
    <tab-bar v-if="$route.meta.keepAlive"></tab-bar>

    <!-- 第二种事件总线组件传值 -->
    <!-- <tab-bar v-if="isShowTaber"></tab-bar> -->
    <!-- 第三种vuex -->
    <!-- <tab-bar v-if="$store.state.isTabbarShow"></tab-bar> -->
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import slideBar from '@/components/slide'
// import navBar from '@/components/navBar'
import axios from 'axios'

import tabBar from '@/components/tabBar'
// import bus from '@/bus'
export default {
  data () {
    return {
      mytext: '请输入',
      dataList: [],
      isShow: false,
      isShowTaber: true
    }
  },
  methods: {
    handleAdd () {
      this.dataList.push(this.mytext)
    },
    handleClick () {
      axios({
        url: '/api/ajax/comingList?token=',
        headers: {
          'If-None-Match': 'W/"10a9-k8ETtcnB48twP6RxiqX9zQ"'
        }
      }).then(res => {
      })
        .catch(err => {
        })
    }
  },
  components: {
    // 'slide-bar': slideBar,
    // 'nav-bar': navBar,
    'tab-bar': tabBar
  },
  beforeMount () {
    // bus.$on('maizuo',(data) => { //事件总线接受
    //   console.log('是否显示底部列表'+data)
    //   this.isShowTaber = data
    // })
  }

}
</script>
<style lang="scss">
html, body, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: inherit;
  font-style: inherit;
  font-weight: normal;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%; }

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  /*text-rendering: optimizeLegibility;*/ }

*,
*:before,
*:after {
  box-sizing: inherit; }

main, article, aside, figure, footer, header, nav, section, details, summary {
  display: block; }

ul,
ol {
  list-style: none; }

img {
  vertical-align: top; }

img,
object,
embed {
  max-width: 100%; }

blockquote, q {
  quotes: none; }

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none; }

del {
  text-decoration: line-through; }

abbr[title], dfn[title] {
  border-bottom: 1px dotted #000;
  cursor: help; }

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0; }

pre {
  white-space: pre;
  white-space: pre-wrap;
  white-space: pre-line;
  word-wrap: break-word; }

input[type="radio"] {
  vertical-align: text-bottom; }

input[type="checkbox"] {
  vertical-align: bottom; }

.ie7 input[type="checkbox"] {
  vertical-align: baseline; }

.ie6 input {
  vertical-align: text-bottom; }

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative; }

sup {
  top: -0.5em; }

sub {
  bottom: -0.25em; }

.clickable, select, label, input[type=button], input[type=submit], input[type=file], button {
  cursor: pointer;
  text-decoration: none;
  color: inherit; }

button,
input,
textarea {
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  outline: none;
  border-radius: 0; }

input,
select {
  vertical-align: middle; }

textarea {
  resize: none; }

a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
  cursor: pointer; }

button:focus,
input:focus,
p:focus,
a:focus,
div:focus,
label:focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  outline: none; }

html {
  background: #fff;
  box-sizing: border-box;
  font-family: "PingFangSC-Regular", "PingFangSC", "微软雅黑","Microsoft YaHei", "miui", "system-ui", "Helvetica","Arial","Verdana","sans-serif";
}

.fl {
  float: left; }

.fr {
  float: right; }

.clearfix:before,
.clearfix:after {
  content: "";
  display: table; }

.clearfix:after {
  clear: both;
  overflow: hidden; }

.clearfix {
  zoom: 1; }

.clear {
  clear: both;
  display: block;
  overflow: hidden;
  height: 0;
  line-height: 0;
  font-size: 0; }

.hidden {
  overflow: hidden; }

</style>

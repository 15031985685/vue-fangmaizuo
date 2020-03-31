<template>
  <div class="form">
    <h2>欢迎登录</h2>
    <ul>
      <li>
        <input class="input" type="text" v-model="name" placeholder="请输入用户名">
      </li>
       <li>
        <input class="input" type="password" @keyup.13="handleLogin" v-model="password" placeholder="请输入密码">
      </li>
      <li>
        <div id="captcha"></div>
         <div id="msg"></div>
      </li>
      <li>
        <button class="submit" @click="handleLogin">登录</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      userInfo: ''
    }
  },
  beforeMount () {
    this.$store.commit('hideTabber', false)// 第一个参数就是mutation名字
  },
  mounted () {
    const loginInfo = {
      admin: '159357',
      system: 'admin'
    }
    this.userInfo = loginInfo
  },
  beforeDestroy () {
    this.$store.commit('showTabber', true)// 第一个参数就是mutation名字
  },
  methods: {
    handleLogin () {
      if (this.userInfo[this.name] === this.password) {
        alert('登录成功')
        window.localStorage.setItem('loginInfo', this.name + ',' + this.password)
        const detail = this.$route.params.userId
        if (detail) {
          this.$router.replace(detail)
        } else {
          this.$router.replace('/film')
        }
      } else {
        alert('用户名密码不正确')
      }
    }
  }
}

</script>
<style scoped lang="scss">
.form {
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(pink, white);
  text-align: center;
  h2{
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #f5f5f5;
    margin-bottom: 30px;
  }
  .input{
    width: 80%;
    height: 32px;
    padding-left: 10px;
    margin: 10px auto;
    outline: none;
    border: 1px solid #f5f5f5;
  }
  .submit{
    width: 80%;
    height: 32px;
    font-size: 16px;
    background: pink;
    color: #fff;
    border: none;
    margin-top: 35px;
  }
}
</style>

<template>
  <div class="backbox" @click="handleBack">
      <span class="icon-houtui iconfont"></span>
  </div>
</template>

<script>
export default {
  methods: {
    handleBack () {
      this.$router.back(-1)
    }
  }
}

</script>
<style scoped lang="scss">
.header-back{
   position: absolute;
  left: 5px;
  top: 5px;
  z-index: 99;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 25px;
  border-radius: 30px;
  background: rgba(0,0,0,0.3);
}
.header-back{
  color: #fff;
  font-size: 24px;
}
</style>

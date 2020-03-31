<template>
  <div>
      <header>
        <back class="back"></back>
        城市选择
      </header>
      <mt-index-list>
        <mt-index-section :index="data.index" v-for="data in dataList" :key="data.index">
            <div @click="chooseCity(city.cityId,city.name)" v-for="city in data.list" :key="city.cityId">
                <mt-cell :title="city.name"></mt-cell>
            </div>
        </mt-index-section>
      </mt-index-list>
  </div>
</template>

<script>
import back from '@/components/back'
import axios from 'axios'
export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?k=2392457',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584584864798863918254","bc":"310100"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.cityChang(res.data.data.cities)
    })
  },
  components: {
    back
  },
  methods: {
    cityChang (cityList) {
      const arrCity = []
      for (let i = 65; i < 91; i++) {
        arrCity.push(String.fromCharCode(i))
      }
      const arry = []
      for (let j = 0; j < arrCity.length; j++) {
        const city = cityList.filter(item => {
          return item.pinyin.substr(0, 1) === arrCity[j].toLowerCase()
        })
        if (city.length > 0) {
          arry.push({
            index: arrCity[j],
            list: city
          })
        }
      }
      this.dataList = arry
    },
    chooseCity (id, name) {
      localStorage.setItem('cityId', id)
      localStorage.setItem('cityName', name)
      this.$router.replace('/cinema')
    }
  }
}

</script>
<style scoped lang="scss">
header{
  position: relative;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #333;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  .back{
    position: absolute;
    left: 15px;
    top: 0;
    span{
      font-size: 24px;
    }
  }
}
</style>

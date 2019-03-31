<template>
  <div>
    <h1>search</h1>
    <ul>
      <li
        v-for="(item,idx) in abc "
        :key="idx"
      >{{item}}</li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  layout: 'search',
  data() {
    return {
      abc: []
    }
  },
  created() {
    // this.getData()
  },

  async asyncData() {
    let { status, data: { abc } } = await axios.get('/users/list')
    return {
      abc
    }
    // fetch('/users/list').then(res => {
    //   return res.json()
    // }).then(list => {
    //   console.log(list.abc)
    //   return  {data:list}
    // })
  },


  methods: {
    getData() {
      fetch('/users/list').then(res => {
        return res.json()
      }).then(data => {
        this.list = data
      })
    }
  }
}
</script>


<style lang='stylus' scoped>
</style>

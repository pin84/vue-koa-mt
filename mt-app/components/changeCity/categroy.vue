<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd
        v-for="item in list"
        :key="item"
      >
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(item,index) in block"
      :key="index"
    >
      <dt :id="'city-'+item.title">{{item.title}}</dt>
      <dd>
        <span
          v-for="c in item.city"
          :key="c"
        >{{c}}</span>
      </dd>
    </dl>
  </div>
</template>


<script>
import jspy from 'js-pinyin'
export default {
  data() {
    return {
      list: 'ABCDEFGHJKLMNPQRSTWXYZ'.split(''),
      block: []
    }
  },
  mounted() {
    fetch('/geo/cities').then(res => {
      return res.json()
    }).then(data => {
      let { result } = data
      let arrCity = result.map(element => {
        return element.value
      });
      let cities = [].concat(...arrCity)
      // console.log(cities)
      let p
      let c
      let d = {}
      let block = []
      cities.forEach(item => {
        p = jspy.getFullChars(item.name).toLowerCase().slice(0, 1)
        c = p.charCodeAt(0)
        if (c > 96 && c < 123) {
          if (!d[p]) {
            d[p] = []
          }
          if (item.name === '市辖区') {
            item.name = item.province
          }
          if (item.name === '省直辖县级行政区划') {
            item.name = item.province
          }
          d[p].push(item.name)
        }
      })
      for (let [k, v] of Object.entries(d)) {
        block.push({
          title: k.toUpperCase(),
          city: v
        })
      }
      block.sort((a,b)=>a.title.charCodeAt(0) - b.title.charCodeAt(0))
      this.block = block
    })
  }
}
</script>


<style lang='scss' scoped>
@import "@/assets/css/changecity/categroy.scss";
</style>

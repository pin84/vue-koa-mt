<template>
  <el-row class="page-product">
    <el-col :span="19">
      <Crumbs :keyword='keyword' />
      <Categroy
        :types='types'
        :areas='areas'
      />
      <List :list='list' />
    </el-col>
    <el-col :span="5">
      <Amap
        :width='230'
        :height='290'
        :point='point'
      />
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
import Crumbs from "@/components/product/crumbs";
import Categroy from "@/components/product/categroy";
import List from "@/components/product/list";
import Amap from "@/components/public/map";
export default {
  components: {
    Crumbs,
    Categroy,
    List,
    Amap
  },
  data() {
    return {
      types: [],
      areas: [],
      list: [],
      keyword: "",
      point: []
    };
  },

  async mounted() {
    let keyword = decodeURIComponent(window.location.search).split('=')[1]
    let city = this.$store.state.geo.position.city;

    let {
      status,
      data: { result }
    } = await axios.get("http://localhost:3000/search/resultsByKeywords", {
      params: {
        keyword, //现在数据库pois里module字段只有 美容 美甲
        city: "丽江" //现在数据库pois里city字段只有丽江
      }
    });
    let { status: status2, data: { areas, types } } = await axios.get(
      "http://localhost:3000/categroy/crumbs",
      {
        city: "丽江" //现在数据库catagroy里城市字段只有丽江
      }
    );


    this.list = result.filter(item => true).map(item => {
      return {
        type: item.type,
        img:
          "http://qcloud.dpfile.com/pc/ZxAcm9sqO96Wqdr6mu9hBOXmtokSZqU8ndjvSWw8iycKsStZDMgo5racItuO8-LMZSUjBikR5Ecy-DoGYkMhlg.jpg",
        name: item.name,
        comment: Math.floor(Math.random() * 1000),
        rate: Math.floor(Math.random() * 10),
        price: Math.floor(Math.random() * 1000),
        scene: "暂无描述", //描述
        tel: item.tel,
        module: item.module,
        status: '可订明日',
        location: {
          longtide: item.longtide,
          latitude: item.latitude
        },
      }

    })

    this.keyword = keyword
    this.areas = areas.filter(item => item.type !== '').slice(0, 5)
    this.types = types.filter(item => item.type !== '').slice(0, 5)
    result.forEach((item, index) => {
      this.point.push({
        icon: `//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-${index+1}.png`,
        position: [item.longtide, item.latitude]
      })
    })


  }

}

</script>


<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>



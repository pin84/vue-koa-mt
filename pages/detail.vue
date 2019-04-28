<template>
  <div class="page-detail">
    <el-row>
      <el-col :span="24">
        <Crumbs :keyword="keyword" :type="type"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Summary :meta="product"/>
      </el-col>
    </el-row>
    <el-row class="m-title">
      <el-col :span="24">
        <h1>商家团购及优惠</h1>
      </el-col>
    </el-row>
    <el-row v-if="canOrder || !login">
      <el-col :span="24">
        <List v-if="login" :list="list"/>
        <div v-else class="deal-need-login">
          <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="登录查看">
          <span>请登录后查看详细团购优惠</span>
          <el-button type="primary" round>
            <a href="/login">立即登录</a>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Crumbs from "@/components/detail/crumbs";
import Summary from "@/components/detail/summary";
import List from "@/components/detail/list";
import axios from "axios";

export default {
  data() {
    return {
      // type: "",
      // keyword: "",
      list: [],
      canOrder: true,
      login: false
    };
  },
  components: {
    Crumbs,
    Summary,
    List
  },
  async asyncData(ctx) {
    let { keyword, type } = ctx.query;
    let city = ctx.store.state.geo.position.city.replace('市','');

    let { data:{product} } = await axios.get("http://localhost:3000/search/product", {
      params: {
        keyword,
        type,
        city:'丽江'//现在数据就只有丽江
      }
    })

    console.log('detail====',product);
    
    return {
      keyword,
      type,
      product
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/detail/index.scss";
</style>

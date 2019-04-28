<template>
  <dl class="m-sum-card">
    <dt>
      <h1>{{ meta.name }}</h1>
      <el-rate v-model="curRate" disabled/>
      <span>{{ Number(meta.rate)||curRate }}分</span>
      <span>人均￥{{ Number(meta.cost) }}</span>
      <ul>
        <li @click="openMap(meta.location)">地址：{{ meta.address }}</li>
        <li>电话：{{ meta.tel }}</li>
      </ul>
    </dt>
    <dd>
      <el-carousel height="214px" indicator-position="none">
        <el-carousel-item v-for="(item,idx) in meta.showImg" :key="idx">
          <h3>
            <img :src="item" alt="item.title" width="100%" height="100%">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      sale: 70 + Math.floor(Math.random() * 300)
    };
  },
  mounted() {
    console.log(this.meta);
  },

  computed: {
    curRate: function() {
      return Number(this.meta.rate) || Math.floor(Math.random() * 5)
    }
  },
  methods: {
    openMap: function(location) {}
  }
};
</script>

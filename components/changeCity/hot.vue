<template>

  <div class="m-hcity">
    <dl>
      <dt>热门城市：</dt>
      <dd
        v-for="item in list"
        :key="item.id"
      >{{item}}</dd>
    </dl>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list:['北京','上海','广州']
    }
  }
}
</script>


<style lang='scss' scoped>
@import '@/assets/css/changecity/hot.scss';
</style>

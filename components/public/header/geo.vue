<template>
  <div class="m-geo">
    <i class="el-icon-location">{{$store.state.geo.position.city? $store.state.geo.position.city :$store.state.geo.position.province}}</i>
    <nuxt-link
      class="changeCity"
      to='/changeCity'
    >切换城市</nuxt-link>
    [佛山 顺德]
  </div>
</template>



<script>
export default {
  
}
</script>



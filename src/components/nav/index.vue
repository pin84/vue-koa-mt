<template>
  <div id="nav">
    <router-link
      tag="span"
      to='/xiaoxi'
    >
      <a href="javascript:;">应用</a>
    </router-link>
    <router-link
      tag="span"
      to='/aboutss'
    >
      <a href="javascript:;">应用</a>
    </router-link>
    <!-- <router-link
        tag="li"
        to='/job'
      >
        <a href="javascript:;">作品集</a>
      </router-link> -->
    <!-- <router-link
        tag="li"
        to='/skill'
      >
        <a href="javascript:;">技术栈</a>
      </router-link>
      <router-link
        tag="li"
        to='/experience'
      >
        <a href="javascript:;">我的经历</a>
      </router-link>
      <router-link
        tag="li"
        to='/message'
      >
        <a href="javascript:;">留言本</a>
      </router-link> -->
  </div>
</template>
<script>
export default {

}
</script>
<style lang='stylus' scoped>
*
  margin 0
  padding 0

#nav
  width 100%
  height 50px
  background #f5f5f5
  border-top 1px solid black
  display flex
  justify-content space-between
  span 
    font-family '微软雅黑'
    font-size 12px
    vertical-align top
    // font-weight 700px
    


  
</style>
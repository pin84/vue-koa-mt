<template>
  <section class="m-istyle">
    <dl @mouseover='over'>
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="item in cur"
        :key="item.title">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: 'all',
      list: {
        all: [{
          title:'日升昌酒店',
          pos:'学校周边',
          price:'500',
          img:'http://p1.meituan.net/msmerchant/5c5556ab8b61e8740dbb51b6c1a3e243152641.jpg@368w_208h_1e_1c',
          url:'//abc.com'
        },{
          title:'日升昌酒店1',
          pos:'学校周边',
          price:'500',
          img:'https://p1.meituan.net/msmerchant/6511598c404d70502f1cae1087926c9471072.jpg@368w_208h_1e_1c',
          url:'//abc.com'
        },{
          title:'日升昌酒店2',
          pos:'学校周边',
          price:'500',
          img:'https://p1.meituan.net/msmerchant/e79b718e32bdf3e2f2da447001a68d5d1591138.jpg@368w_208h_1e_1c',
          url:'//abc.com'
        },],
        part: [{
          title:'日升昌酒店3',
          pos:'学校周边',
          price:'500',
          img:'https://p1.meituan.net/bbia/a13ea179bc28e3e1895380c1f4ab20a2101961.jpg@368w_208h_1e_1c',
          url:'//abc.com'
        },],
        spa: [{
          title:'日升昌酒店4',
          pos:'学校周边',
          price:'500',
          img:'https://p0.meituan.net/scarlett/dd40062805e73a876692b9589339b1c6223571.png@368w_208h_1e_1c',
          url:'//abc.com'
        },],
        movie: [{
          title:'日升昌酒店5',
          pos:'学校周边',
          price:'500',
          img:'http://p1.meituan.net/msmerchant/5c5556ab8b61e8740dbb51b6c1a3e243152641.jpg@368w_208h_1e_1c',
          url:'//abc.com'
        },],
        travel: [{
          title:'日升昌酒店6',
          pos:'学校周边',
          price:'500',
          img:'https://p1.meituan.net/mogu/4860a3fb024289d0d8f6d51fdd3d9ee0218943.jpg@368w_208h_1e_1c',
          url:'//abc.com'
        },]
      }
    }
  },
  computed: {
    cur: function () {
      return this.list[this.kind]
    }
  },
  // async mounted(){
  //   let self=this;
  //   let {status,data:{count,pois}}=await self.$axios.get('/search/resultsByKeywords',{
  //     params:{
  //       keyword:'景点',
  //       city:self.$store.state.geo.position.city
  //     }
  //   })
  //   if(status===200&&count>0){
  //     let r= pois.filter(item=>item.photos.length).map(item=>{
  //       return {
  //         title:item.name,
  //         pos:item.type.split(';')[0],
  //         price:item.biz_ext.cost||'暂无',
  //         img:item.photos[0].url,
  //         url:'//abc.com'
  //       }
  //     })
  //     self.list[self.kind]=r.slice(0,9)
  //   }else{
  //     self.list[self.kind]=[]
  //   }
  // },
  methods: {
    over(e){

      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      if(tag === 'dd'){
        this.kind = dom.getAttribute('kind')
      }

    }
    // over: async function (e) {
    //   let dom = e.target
    //   console.log(dom)


      // let tag = dom.tagName.toLowerCase()
      // let self = this
      // if (tag === 'dd') {
      //   this.kind = dom.getAttribute('kind')
      //   let keyword = dom.getAttribute('keyword')
      //   let {status,data:{count,pois}}=await self.$axios.get('/search/resultsByKeywords',{
      //     params:{
      //       keyword,
      //       city:self.$store.state.geo.position.city
      //     }
      //   })
      //   if(status===200&&count>0){
      //     let r= pois.filter(item=>item.photos.length).map(item=>{
      //       return {
      //         title:item.name,
      //         pos:item.type.split(';')[0],
      //         price:item.biz_ext.cost||'暂无',
      //         img:item.photos[0].url,
      //         url:'//abc.com'
      //       }
      //     })
      //     self.list[self.kind]=r.slice(0,9)
      //   }else{
      //     self.list[self.kind]=[]
      //   }
      // }
    // }
  },

}
</script>
<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>

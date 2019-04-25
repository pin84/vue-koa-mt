<template>
  <div
    :id="id"
    :style="{width:width+'px',height:height+'px',margin:'34px auto'}"
    class="m-map"
  />
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    point: {
      type: Array,
      default() {
        return [116.480983, 39.989628]
      }
    }
  },
  data() {
    return {
      id: `map`,
      key: "d43d588a9f9ba65038aba93320418500"
    };
  },
  mounted() {
    this.id = `map${Math.random().toString().slice(4, 6)}`
    let id = this.id
    window.onLoad = () => {
      var map = new AMap.Map(id, {
        center: this.point[0].position,
        zoom: 11
      });

      map.clearMap();  // 清除地图覆盖物
      // 地图上添加点标记，作为参照
      this.point.forEach(function (marker) {
        new AMap.Marker({
          map: map,
          icon: marker.icon,
          position: [marker.position[0], marker.position[1]],
          offset: new AMap.Pixel(-13, -30)
        });
      });


      window.AMap.plugin('AMap.ToolBar', () => {
        let toolbar = new window.AMap.ToolBar()
        map.addControl(toolbar)
        // let marker = new window.AMap.Marker({
        //   icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        //   position: this.point
        // })
        marker.setMap(map)
      })

    }

    var url =
      `https://webapi.amap.com/maps?v=1.4.14&key=${this.key}&callback=onLoad`;
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }

};
</script>

<style>
/* 地图上的标记的大小 */
.amap-icon img {
  width: 20px;
  height: 30px;
}
</style>


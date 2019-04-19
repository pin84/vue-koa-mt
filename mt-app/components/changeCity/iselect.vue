<template>
  <div class="m-iselect">
    <span class="name">按省份选择：</span>
    <el-select
      v-model="pvalue"
      placeholder="请选择"
    >
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.value"
        :value="item.label"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="cvalue"
      :disabled="!city.length"
      placeholder="请选择"
    >
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pvalue: '',
      province: [],
      cvalue: '',
      city: [],
      input: '',
      timeout: null,
      cities: [] //储存所有城市
    }
  },
  watch: {
    pvalue: function (newProvinceId) {
      fetch(`/geo/cityById?provinceId=${newProvinceId}`).then(res => {
        return res.json()
      }).then(data => {
        let { code, city } = data
        this.city = city.map((item, index) => {
          return {
            value: item,
            // label:index
          }
        })
      })
      this.cvalue = ''
    }
  },

  mounted() {
    fetch('/geo/province').then(res => {
      return res.json()
    }).then(data => {
      this.province = data.result.map(item => {
        return {
          value: item.value[0],
          label: item.id
        }
      })
    })
    this.pvalue = ''
  },
  methods: {
    // querySearchAsync() {
    //   this.throttle(this.fetchData, 1000)()
    // },
    // handleSelect() { },


    querySearchAsync(queryString, cb) {
      if (!this.cities.length) {
        fetch('/geo/cities').then(res => {
          return res.json()
        }).then(data => {
          let { result } = data
          let arrCity = result.map(element => {
            return element.value
          });
          let cities = [].concat(...arrCity)
          this.cities = cities.map(item => {
            // console.log(item.name )
            return { value: item.name }
          })
        })
      }

      var restaurants = this.cities;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results)
      }, 1000);
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.indexOf(queryString) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },


}
</script>


<style lang='scss'>
@import "@/assets/css/changeCity/iselect.scss";
</style>

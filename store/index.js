import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo,
    home
  },
  actions: {
    async nuxtServerInit({
      commit
    }, { req, app }) {
      const {status,data:{province,city}} = await axios.get('http://localhost:3000/geo/getPosition')
      commit('geo/setPosition',{province,city})

      const {status:status2,data:{result:{menu}}} = await axios.get('http://localhost:3000/geo/menu')
      commit('home/setMenu',menu)
      const {status:status3,data:{res}} = await axios.get('http://localhost:3000/search/hotPlace',{
        params:{
          // city:app.store.state.geo.position.city, //现在数据库只有丽江，所以先写死
          city:'丽江'
        }
      })
      commit('home/setHotPlace', res)
    }
  }
})


export default store


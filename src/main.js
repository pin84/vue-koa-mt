import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import jq from 'jquery'
Vue.prototype.$ =jq



import Mui from 'vue-awesome-mui'  
import 'vue-awesome-mui/mui/dist/css/mui.css'  
import "vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css";  
// mount with global  
Vue.use(Mui)  




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

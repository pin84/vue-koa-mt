import Router from 'koa-router'
// import axios from './utils/axios'
import axios from 'axios'

let router = new Router({ prefix: '/geo' })

const sign = '8BznYmG0qMCZgWOlXNQBwMoTviWd3utr'

router.get('/getPosition', async  (ctx) => {

  // {status,data:{content:{address_detail:{city}}}} 百度地图接口返回的解构 拿到city的值
  let {status,data:{content:{address_detail:{city}}}}=await axios.get(`http://api.map.baidu.com/location/ip?ak=${sign}`)

  ctx.body ={
    city
  }

})


export default router

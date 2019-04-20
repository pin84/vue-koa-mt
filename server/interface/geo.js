import Router from 'koa-router'
// import axios from './utils/axios'
import axios from 'axios'
import Menu from '../dbs/models/menu'
import City from '../dbs/models/city'
import Province from '../dbs/models/province'

let router = new Router({ prefix: '/geo' })

const sign = '8BznYmG0qMCZgWOlXNQBwMoTviWd3utr'

router.get('/getPosition', async (ctx) => {
  // {status,data:{content:{address_detail:{city}}}} 百度地图接口返回的解构 拿到city的值
  // let { status, data: { content: { address_detail: { city, province } } } } = await axios.get(`http://api.map.baidu.com/location/ip?ak=${sign}`)

  let { status, data } = await axios.get(`http://api.map.baidu.com/location/ip?ak=${sign}`)

  console.log('geo/getposition======', data)
  ctx.body = {
    status,
    data,
    // province,
    // city
  }
})

router.get('/province', async (ctx) => {
  let result = await Province.find()
  ctx.body = {
    code: 0,
    result
  }
})

router.get('/menu', async (ctx) => {
  const result = await Menu.findOne()
  ctx.body = {
    result
  }
})

router.get('/cityById', async (ctx) => {
  let id = ctx.query.provinceId
  let result = await City.find({
    id
  })
  let { value } = result[0]
  let city = value.map(item => {
    return item.name
  })
  ctx.body = {
    code: 0,
    city
  }
})
router.get('/cities', async (ctx) => {
  let result = await City.find()
  // let {value} = result[0]
  // let citys = value.map(item =>{
  //   return item.name
  // })
  ctx.body = {
    code: 0,
    result
  }
})


export default router

import Router from 'koa-router'
import Categroy from '../dbs/models/categroy'

let router = new Router({ prefix: '/categroy' })

router.get('/crumbs', async (ctx) => {

  // let result = await Categroy.findOne({ city: ctx.query.city.replace('市', '') || '北京' })
  let city = ctx.query.city
  console.log('categroy,js ====',city);
  let result = await Categroy.findOne({
    city:'丽江'
  })


  ctx.body = {
    areas: result.areas,
    types: result.types
  }
})

export default router


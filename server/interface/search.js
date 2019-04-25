import Router from 'koa-router'
import axios from 'axios'
import Poi from '../dbs/models/poi'
import { set } from 'mongoose';

let router = new Router({ prefix: '/search' })


router.get('/top', async (ctx) => {
  try {
    let top = await Poi.find({
      name: new RegExp(ctx.query.input),
      city: ctx.query.city
    })

    ctx.body = {
      code: 0,
      top: top.map(item => {
        return item.name
      }),
      // type: top.length ? top[0].type : ''
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      top: []
    }
  }
})


router.get('/hotPlace', async (ctx) => {
  let city = ctx.query.city
  let result = await Poi.find({
    city,
    hotPlace: true
  })

  let res = result.map(item => {
    return item.module
  })


  ctx.body = {
    code: 0,
    res: Array.from(new Set(res))
  }
})

router.get('/resultsByKeywords', async (ctx) => {

  const city = ctx.query.city
  const keyword = ctx.query.keyword

  let result = await Poi.find({
    city: '丽江',
    $or: [
      { module: keyword }, { name: keyword }
    ],
  })
  ctx.body = {
    code: 0,
    result
  }
})



export default router

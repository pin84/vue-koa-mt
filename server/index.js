const Koa =  require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

// //引入自己要用的包
// const mongoose =require('mongoose')
// const bodyParser =require('koa-bodyparser')
// const session =require('koa-generic-session')  //koa-redis依赖
// const Redis =require('koa-redis')
// const json =require('koa-json')  //美化服务端发往客户端的json 数据
// const dbConfig =require('./dbs/config')
// const passport =require('./interface/utils/passport')
// const users =require('./interface/users')
// const geo =require('./interface/geo')
// const search =require('./interface/search')

//引入自己要用的包
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session' //koa-redis依赖
import Redis from 'koa-redis'
import json from 'koa-json' //美化服务端发往客户端的json 数据
import dbConfig from './dbs/config'
import passport from './interface/utils/passport'
import users from './interface/users'
import geo from './interface/geo'
import search from './interface/search'
import categroy from './interface/categroy'


const app = new Koa()

//自己的配置
app.keys = ['live84', 'mt']
app.proxy = true
app.use(session({
  key: 'mt',
  prefix: 'mt:uid',
  store: new Redis()
}))
app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))
app.use(json())
mongoose.connect(dbConfig.dbs, { useNewUrlParser: true })
app.use(passport.initialize())
app.use(passport.session())
//自己的配置END

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  let corsUrl = ['http://mt.html8.info']
  app.use(async (ctx, next) => {
    let origin = ctx.header.origin
    let index = corsUrl.indexOf(origin)
  
    //前台请求时 credentials: 'include', 所以这一项的值不能这通配符 *
    ctx.set('Access-Control-Allow-Origin', `${corsUrl[index]}`)
    ctx.set("Access-Control-Allow-Headers", "X-Requested-With")
    ctx.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    ctx.set("Access-Control-Allow-Credentials", "true") //允许前台 fetch 请求的跨域 cookie
    ctx.set("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE")
    ctx.set("Content-Type", "application/json;charset=utf-8")
    await next()
  })


  //引入自己的路由
  app.use(users.routes()).use(users.allowedMethods())
  app.use(geo.routes()).use(geo.allowedMethods())
  app.use(search.routes()).use(search.allowedMethods())
  app.use(categroy.routes()).use(categroy.allowedMethods())


  //END
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()

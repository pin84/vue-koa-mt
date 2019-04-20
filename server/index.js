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

  //引入自己的路由
  app.use(users.routes()).use(users.allowedMethods())
  app.use(geo.routes()).use(geo.allowedMethods())
  app.use(search.routes()).use(search.allowedMethods())


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

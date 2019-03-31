const  Router =require('koa-router')

const router = new Router({
  prefix:'/city'
})

router.get('/list',async (ctx) => {
  ctx.body = ['beijing','tianjin']
})


module.export =  router

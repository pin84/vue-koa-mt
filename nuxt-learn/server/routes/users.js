const router = require('koa-router')()

router.prefix('/users')

router.get('/list', function (ctx, next) {


  ctx.body = {
    abc: ['北京', '湖南']
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router

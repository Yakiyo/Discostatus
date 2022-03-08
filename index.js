const koa = require('koa'),
      app = new koa(),
      koaRouter = require('koa-router')(),
      status = require('./src/status.js')

koaRouter.get('/', async function (ctx) {
  ctx.body = 'Konnichiwa ヽ(°〇°)ﾉ'
})

koaRouter.get('/@:uid', async function (ctx) {
  await status(ctx)
})

app.use(koaRouter.routes())
app.listen(3000, function() {
  console.log('Online')
})
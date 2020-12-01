const dao = require("../dao");
const router = require('koa-router')()

router.prefix('/users')

router.get('/list', async function (ctx, next) {
  let result = await dao.getList();
  console.log('users',result);
  ctx.body = result;
})

router.post('/insert', async function (ctx, next) {
  let user = ctx.request.body;
  let result = await dao.insertUser(user);
  ctx.body = result;
})

router.get('/titleByName',async (ctx, next) => {
  let result = await dao.getTitleByName();
  ctx.body = result;
})

router.get('/createTable',async (ctx, next) => {
  let result = await dao.createTable();
  ctx.body = result;
})

module.exports = router

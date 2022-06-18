const path = require('path')

const Koa = require('koa')
const KoaStatic = require('koa-static')
const KoaBody = require('koa-body')
const cors = require('koa2-cors')

const router = require('../router')
const app = new Koa()

app.use(cors())
app.use(KoaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '../../upload'),
    keepExtensions: true
  }
}))
app.use(KoaStatic(path.join(__dirname, '../../upload')))
app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app

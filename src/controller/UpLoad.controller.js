const path = require('path')
const { HOST } = require('../config')
class UploadController {
  async upload (ctx, next) {
    const { imgfile } = ctx.request.files
    const fileTypes = ['image/jpeg', 'image/png']
    if (imgfile) {
      if (!fileTypes.includes(imgfile.mimetype)) {
        ctx.body = {
          code: 400,
          desc: '不支持的图片类型'
        }
      }
      ctx.body = {
        code: 200,
        desc: '图片上传成功！',
        data: HOST + '/' + path.basename(imgfile.filepath)
      }
    } else {
      ctx.body = {
        code: 412,
        desc: '上传失败'
      }
    }
  }
}

module.exports = new UploadController()

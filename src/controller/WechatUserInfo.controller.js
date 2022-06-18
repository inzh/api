const {
  getWechatUserInfoService,
  addWechatUserInfoService
} = require('../service/WechatUserInfo.service')

class WechatUserInfoController {
  async addWechatUserInfo (ctx, next) {
    try {
      const res = await addWechatUserInfoService(ctx.request.body)
      ctx.body = {
        code: 200,
        msg: '添加成功！',
        data: res
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        code: 400,
        msg: '添加失败！',
        error: {
          name: err.name,
          message: err.message
        }
      }
    }
  }

  async getWechatUserInfo (ctx, next) {
    const { vxsenderid } = ctx.request.body
    try {
      const res = await getWechatUserInfoService(vxsenderid)
      ctx.body = {
        code: 200,
        msg: '请求成功！',
        data: res
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        code: 400,
        msg: '请求失败！',
        error: {
          name: err.name,
          message: err.message
        }
      }
    }
  }
}

module.exports = new WechatUserInfoController()

const {
  getWechatMomentsService,
  addWechatMomentsService,
  updateWechatMomentsService
} = require('../service/WechatMoments.service')

class WechatMomentsController {
  async addWechatMoments (ctx, next) {
    try {
      const res = await addWechatMomentsService(ctx.request.body)
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

  async getWechatMoments (ctx, next) {
    try {
      const res = await getWechatMomentsService(ctx.request.body)
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

  async updateWechatMoments (ctx, next) {
    try {
      const res = await updateWechatMomentsService(ctx.request.body)
      console.log(res)
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

module.exports = new WechatMomentsController()

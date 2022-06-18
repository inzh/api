const {
  addPhoneActionService,
  getAllPhoneActionService
} = require('../service/PhoneAction.service')

class PhoneCalledController {
  async addPhoneAction (ctx, next) {
    try {
      const res = await addPhoneActionService(ctx.request.body)
      ctx.body = {
        code: 200,
        msg: '添加成功！',
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

  async getAllPhoneAction (ctx, next) {
    try {
      const { pageSize, pageIndex } = ctx.request.body
      const res = await getAllPhoneActionService(pageSize, pageIndex)
      ctx.body = {
        code: 200,
        msg: '查询成功！',
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

module.exports = new PhoneCalledController()

const {
  addSearchContentService,
  getAllSearchContentService,
  getHotWordService
} = require('../service/SearchContent.service')

class PhoneCalledController {
  async addSearchContent (ctx, next) {
    try {
      const res = await addSearchContentService(ctx.request.body)
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

  async getAllSearchContent (ctx, next) {
    try {
      const { pageSize, pageIndex } = ctx.request.body
      const res = await getAllSearchContentService(pageSize, pageIndex)
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

  async getHotWord (ctx, next) {
    try {
      const { num } = ctx.request.body
      const res = await getHotWordService(num || 5)
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

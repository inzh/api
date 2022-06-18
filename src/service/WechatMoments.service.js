const WechatMoments = require('../model/WechatMoments.model')
const { Op } = require('sequelize')

class WechatMomentsService {
  async addWechatMomentsService (body) {
    try {
      const res = await WechatMoments.create(body)
      return res.dataValues
    } catch (err) {
      return err
    }
  }

  async getWechatMomentsService (body) {
    const {
      search_content,
      pageIndex,
      pageSize
    } = body
    try {
      let res = []
      if (pageIndex && pageSize) {
        res = await WechatMoments.findAll({
          where: {
            vxcontent: {
              [Op.regexp]: `${search_content}`
            }
          },
          offset: (pageIndex - 1) * pageSize, // 当前第几页
          limit: pageSize// 每页显示数量
        })
      } else {
        res = await WechatMoments.findAll({
          where: {
            vxcontent: {
              [Op.regexp]: `${search_content}`
            }
          }
        })
      }
      return res.map((item) => item.dataValues)
    } catch (err) {
      return err
    }
  }

  async updateWechatMomentsService (body) {
    try {
      const res = await WechatMoments.update(body, {
        where: {
          vxid: body.vxid,
          vxfriendid: body.vxfriendid
        }
      })
      return res
    } catch (err) {
      return err
    }
  }
}

module.exports = new WechatMomentsService()

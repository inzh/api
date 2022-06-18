const WechatUserInfo = require('../model/WechatUserInfo.model')

class WechatUserInfoService {
  async addWechatUserInfoService (body) {
    try {
      const res = await WechatUserInfo.create(body)
      return res.dataValues
    } catch (err) {
      return err
    }
  }

  async getWechatUserInfoService (vxsenderid) {
    try {
      const res = await WechatUserInfo.findAll({
        where: {
          vxsenderid
        }
      })
      return res[0].dataValues
    } catch (err) {
      return err
    }
  }
}

module.exports = new WechatUserInfoService()

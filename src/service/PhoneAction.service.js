const PhoneAction = require('../model/PhoneAction.model')
const { Op } = require('sequelize')

class PhoneActionService {
  async addPhoneActionService (param) {
    try {
      const res = await PhoneAction.create(param)
      return res.dataValues
    } catch (err) {
      return err
    }
  }

  async getAllPhoneActionService (pageSize, pageIndex) {
    // 今天开始的时间
    const start = (new Date()).setHours(0, 0, 0, 0)
    // 三天前开始的时间
    const day3Ago = (new Date((new Date()) - 3 * 24 * 3600 * 1000)).setHours(0, 0, 0, 0)
    // 今天截止的时间
    const end = (new Date()).setHours(23, 59, 59, 999)
    try {
      let res = []
      if (pageSize && pageIndex) {
        res = await PhoneAction.findAll({
          offset: pageSize * (pageIndex - 1),
          limit: pageSize
        })
      } else {
        res = await PhoneAction.findAll()
      }
      const r = await Promise.all(
        res.map(item => {
          return (async () => {
            return {
              id: item.id,
              phone_num: item.phone_num,
              action_type: item.action_type,
              action_time: item.action_time,
              countToday: await PhoneAction.count({
                where: {
                  phone_num: item.phone_num,
                  action_type: item.action_type,
                  action_time: {
                    [Op.gte]: start,
                    [Op.lte]: end
                  }
                }
              }),
              countLatest3day: await PhoneAction.count({
                where: {
                  phone_num: item.phone_num,
                  action_type: item.action_type,
                  action_time: {
                    [Op.gte]: day3Ago,
                    [Op.lte]: end
                  }
                }
              }),
              countAllday: await PhoneAction.count({
                phone_num: item.phone_num,
                action_type: item.action_type
              })
            }
          })()
        })
      )
      return r
    } catch (err) {
      return err
    }
  }
}

module.exports = new PhoneActionService()

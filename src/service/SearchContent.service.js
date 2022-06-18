const SearchContent = require('../model/SearchContent.model')
const HotWord = require('../model/HotWord.model')
const { Op } = require('sequelize')

class SearchContentService {
  async addSearchContentService (param) {
    try {
      const res = await SearchContent.create(param)
      const hot = await HotWord.findOrCreate({
        where: {
          hot_word: param.search_content
        },
        defaults: {
          hot_word: param.search_content,
          search_times: 1,
          search_date: new Date()
        }
      })
      if (!hot[1]) {
        const count = hot[0].dataValues.search_times
        await HotWord.update({
          search_times: count + 1,
          search_date: new Date()
        }, {
          where: {
            hot_word: param.search_content
          }
        })
      }
      return res
    } catch (err) {
      return err
    }
  }

  async getAllSearchContentService (pageSize, pageIndex) {
    // 今天开始的时间
    const start = (new Date()).setHours(0, 0, 0, 0)
    // 三天前开始的时间
    const day3Ago = (new Date((new Date()) - 3 * 24 * 3600 * 1000)).setHours(0, 0, 0, 0)
    // 今天截止的时间
    const end = (new Date()).setHours(23, 59, 59, 999)
    try {
      let res = []
      if (pageSize && pageIndex) {
        res = await SearchContent.findAll({
          offset: pageSize * (pageIndex - 1),
          limit: pageSize
        })
      } else {
        res = await SearchContent.findAll()
      }
      const r = await Promise.all(
        res.map(item => {
          return (async () => {
            return {
              id: item.id,
              search_content: item.search_content,
              search_date: item.search_date,
              countToday: await SearchContent.count({
                where: {
                  search_content: item.search_content,
                  search_date: {
                    [Op.gte]: start,
                    [Op.lte]: end
                  }
                }
              }),
              countLatest3day: await SearchContent.count({
                where: {
                  search_content: item.search_content,
                  search_date: {
                    [Op.gte]: day3Ago,
                    [Op.lte]: end
                  }
                }
              }),
              countAllday: await SearchContent.count({
                search_content: item.search_content
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

  async getHotWordService (num) {
    try {
      const res = await HotWord.findAll({
        order: [
          ['search_times', 'DESC']
        ]
      }, {
        limit: num
      })
      return res.map(item => item.dataValues)
    } catch (err) {
      return err
    }
  }
}

module.exports = new SearchContentService()

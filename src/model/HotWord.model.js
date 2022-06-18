const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const HotWord = sequelize.define('api_hotword', {
  hot_word: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '热搜词'
  },
  search_times: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '搜索次数'
  },
  search_date: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: '记录搜索时的时间'
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = HotWord

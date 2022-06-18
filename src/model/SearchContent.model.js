const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const SearchContent = sequelize.define('api_searchcontent', {
  search_content: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '搜索内容'
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

module.exports = SearchContent

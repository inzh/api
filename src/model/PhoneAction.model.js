const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const PhoneAction = sequelize.define('api_phoneaction', {
  phone_num: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '手机号'
  },
  action_type: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '动作类型'
  },
  action_time: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: '动作触发时间'
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = PhoneAction

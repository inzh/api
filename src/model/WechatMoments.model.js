const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const WechatMoments = sequelize.define('wechat_moments', {
  vxid: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'VX号'
  },
  vxfriendid: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'VX 朋友圈id'
  },
  vxsendtime: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    comment: '发送时间'
  },
  vxcontent: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '发送内容'
  },
  vxpictureurl: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: '图片url'
  }
}, {
  timestamps: false,
  freezeTableName: true
})
WechatMoments.removeAttribute('id')
module.exports = WechatMoments

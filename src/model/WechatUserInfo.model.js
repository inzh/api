const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const WechatUserInfo = sequelize.define('wechat_userinfo', {
  vxsenderid: {
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: '微信发送id'
  },
  vxsendername: {
    type: DataTypes.STRING(100),
    allowNull: false,
    comment: '微信发送名称'
  },
  vxsenderautograph: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: '签名'
  },
  vxsenderphone: {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: '手机号'
  }
}, {
  timestamps: false,
  freezeTableName: true
})
WechatUserInfo.removeAttribute('id')
module.exports = WechatUserInfo

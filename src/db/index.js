const { Sequelize } = require('sequelize')

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB
} = require('../config')

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  dialect: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  timezone: '+08:00' // 时区同步
})

sequelize.sync({
  force: false // 删除表并且重新创建,生产环境一定要为false
})

module.exports = sequelize

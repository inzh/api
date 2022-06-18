const Router = require('@koa/router')
const {
  addSearchContent,
  getAllSearchContent,
  getHotWord
} = require('../controller/SearchContent.controller')

const {
  addPhoneAction,
  getAllPhoneAction
} = require('../controller/PhoneAction.controller')

const {
  upload
} = require('../controller/UpLoad.controller')

const {
  addWechatMoments,
  getWechatMoments
} = require('../controller/WechatMoments.controller')

const {
  addWechatUserInfo,
  getWechatUserInfo
} = require('../controller/WechatUserInfo.controller')

const router = new Router({ prefix: '/api' })

// 获取热搜词
router.post('/getHotWord', getHotWord)

// 搜索内容统计数据
router.post('/addSearchContent', addSearchContent)
router.post('/getAllSearchContent', getAllSearchContent)

// 手机号码动作
router.post('/addPhoneAction', addPhoneAction)
router.post('/getAllPhoneAction', getAllPhoneAction)

// 图片上传
router.post('/upload', upload)

// 添加采集内容
router.post('/addWechatMoments', addWechatMoments)
// 根据搜索词获取搜索内容
router.post('/getWechatMoments', getWechatMoments)

// 添加微信用户信息
router.post('/addWechatUserInfo', addWechatUserInfo)
// 根据id 查询微信用户
router.post('/getWechatUserInfo', getWechatUserInfo)

module.exports = router

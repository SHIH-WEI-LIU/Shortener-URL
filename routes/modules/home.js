// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Url = require('../../models/Url')
const generateUrl = require('../../generate_url')

//首頁路由
router.get('/', (req, res) => {
  res.render('index')// 將資料傳給樣板
})


//首頁input後的路由
router.post('/', (req, res) => {
  const originUrl = req.body.url
  const shortUrl = generateUrl()
  const host = req.headers.host
  Url.findOne({ originUrl })
    .then(data =>
      data ? data : Url.create({ shortUrl, originUrl }) //若data不同則重新create shortUrl
    )
    .then(data =>
      res.render("index", { host, shortUrl: data.shortUrl, originUrl })//再把剛create進入DB的資料render出來
    )
    .catch(error => console.error(error))
})

//將ShortenUrl導向originUrl
router.get("/:shortUrl", (req, res) => {
  const shortUrl = req.params.shortUrl
  Url.findOne({ shortUrl })
    .then(data => 
      !data ? res.send(`errorMsg: Can't found the URL`) : res.redirect(data.originUrl))
    .catch(error => console.error(error))
})

module.exports = router // 匯出路由器

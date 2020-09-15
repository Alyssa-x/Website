var express = require("express");
var router = express.Router();
var services = require("../services");
// 匹配 GET 基路径/
router.get("/", async function (req, res) {
   
    var page = +req.query.page || 1;
    var limit = +req.query.limit || 10;
    var result = await services.newsService.getNews(page, limit, "");
    res.send(result);
})

//匹配 GET 基路径/a
router.get("/a", function (req, res) {
    
})

// 匹配 POST 基路径/
router.post("/", function (req, res) {

})

module.exports = router;
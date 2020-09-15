var express = require("express");
var router = express.Router();
var services = require("../services");

router.post("/reg", async function (req, res) {
  req.body.role = "普通用户";
  try {
      var result = await services.userService.reg(req.body);
      res.send(result);
  }
  catch (err) {
      res.send({
          err: err.message //有错时也要传一个对象，不能传null，否则服务器不能 resp.json()
      });
  }
});


router.post("/login", async function (req, res) {
  var result = await services.userService.login(req.body.loginId, req.body.loginPwd);
  if (result) {
    res.send(result);

  }
  else{
    res.send({
      err: "账号不存在，请注册",
    });


  }
});

module.exports = router;

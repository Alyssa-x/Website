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
    // 登录成功
    res.cookie("token", result._id, {
      // cookie的其他信息
      path: "/", // 默认值为 /
      maxAge: 3600 * 1000 * 24, // 单位毫秒，在响应头中会自动转换为秒
      signed: true, //  启用后，会使用之前配置的私钥，对值进行加密
    });

    res.send(result);

  }
  else{
    res.send({
      err: "账号不存在，请注册",
    });


  }
});

router.get("/whoami", function (req, res) {
  // 得到客户端当前登录的用户信息
  // 客户端是否需要在query中传递用户的id
  if (req.user) {
    // 登录过了
    res.send(req.user);
  } else {
    // 没有登录过，或登录已过期
    res.send({
      err: "没有登录，或登录已过期",
    });
  }
});

module.exports = router;

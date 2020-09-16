var express = require("express"); // 导入express
var cookieParser = require("cookie-parser")
var app = express(); // 创建一个web服务器
var path = require("path");


var secret = "ntu";
app.use(cookieParser(secret));
app.use(require("./middleware/LoginUser"));
app.use(require("./middleware/Permission"));


//搭建静态服务器
app.use(express.static(path.resolve(__dirname,"public")));


//urlencoded
app.use(express.urlencoded({extended: true}));

//json
app.use(express.json());

//router
app.use("/api/user",require("./routes/user"));
app.use("/api/news", require("./routes/news"));

app.listen(9527, function () {
  console.log("server listening on 9527");
});


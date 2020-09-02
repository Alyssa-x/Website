
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    loginId: {
      type: String,
      required: true,//必填
      unique: true,//属性值唯一
      trim: true,//写入数据时会自动去掉首尾空格
      minlength: 3,//约束：字符串最小长度为3
      maxlength: 18,//约束：字符串最大长度为18
    },
    loginPwd: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 18,
      select: false,//后续对用户进行查询时，默认不要查询密码
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 10,
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      enum: ["管理员", "普通用户", "VIP"],//用户角色是个字符串，只能从这三个里取值
    },
  });
  
  //定义模型
module.exports = mongoose.model("User", userSchema); //User为模型名，就是集合的名字
  
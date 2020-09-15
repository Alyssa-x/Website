var mongoose = require("mongoose");
mongoose.set("useCreateIndex", true); 
mongoose.connect("mongodb://root:123456@192.168.31.110:27017/admin", {//会自动创建Alyssa collection
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
});

mongoose.connection.on("open", () => {
  console.log("连接已打开");
});


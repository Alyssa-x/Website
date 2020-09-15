
$(function () {
  // 与login接口交互
  $("input.submit").click(function () {
    $.ajax({
      url: "http://localhost:9527/api/user/login",
      type: "POST",
      data: {
        loginId: $("input.userName").val(),
        loginPwd: $("input.password").val(),
      },

      success: function (res) {
        console.log(res);
        if (res.err) {
          alert(res.err);
        } else {
          alert("登陆成功");
          location.href = "http://localhost:9527/welcome.html";
        }
      },
    });
  });

  // 与Register接口交互
  $("button.reg").click(function () {
    $.ajax({
      url: "http://localhost:9527/api/user/reg",
      type: "POST",
      data: {
        loginId: $("input.userName").val(),
        loginPwd: $("input.password").val(),
        name: $("input.name").val(),
        age: $("input.age").val(),
      },
      success: function (res) {
        console.log(res);
        alert("注册成功");
        location.href = "http://localhost:9527/login.html";
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  
});


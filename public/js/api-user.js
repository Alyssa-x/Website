
$(function () {

  // login ajax
  $("input.submit").click(function () {
    $.ajax({
      url: "http://localhost:9528/api/user/login",
      type: "POST",
      data: {
        loginId: $("input.userName").val(),
        loginPwd: $("input.password").val(),
      },
    
      success: function (res) {
        console.log(res);
        alert("login success");
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  // Reg ajax
  $("button.reg").click(function(){
    $.ajax({
        url:"http://localhost:9528/api/user/reg",
        type: "POST",
        data: {
          loginId: $("input.userName").val(),
          loginPwd: $("input.password").val(),
          name:$("input.name").val(),
          age:$("input.age").val()
        },
        success: function (res) {
          console.log(res);
          alert("reg success");
        },
        error: function (err) {
          console.log(err);
        },
    })
})
});

// submit.onclick = async function login() {

//   var loginInfo = '{loginId = "mxz" ,loginPwd = 123}';
//   var json = JSON.stringify(loginInfo);//得到json格式的字符串
//   var resp = await fetch("/api/user/login", {
//       method: "POST",
//       headers: {
//           "content-type": "application/json",
//       },
//       body: json,
//   });

//   var result = await resp.json();   
//   if (result.err) {
//      return "登录失败";
//   }else{
//       alert("login Success");
      
//   }

// }

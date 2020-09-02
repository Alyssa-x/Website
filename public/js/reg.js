$(function(){
    $("button.reg").click(function(){
        $ajax({
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
})
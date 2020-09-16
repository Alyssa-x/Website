function $(selector) {
  return document.querySelector(selector);
}
function setVisible(visible, ...doms) {
  for (const dom of doms) {
    dom.style.display = visible ? "initial" : "none";
  }
}

/**
 * 获取当前登录的用户信息
 * 如果当前没有登录的用户，返回null
 */
async function whoAmI() {
  var resp = await fetch("/api/user/whoami");
  var result = await resp.json();
  if (result.err) {
    // 之前没有登录
    return null;
  }
  return result;
}
/**
 * 注销
 */
async function loginOut() {
  document.cookie = "token=; max-age=-1";
  location.href = "/login.html";
}

(async function () {
  var loginDOM = $(`[data-role="login"]`);
  var regDOM = $(`[data-role="reg"]`);
  var loginoutDOM = $(`[data-role="loginout"]`);
  var personalDOM = $(`[data-role="personal"]`);

  setVisible(false, loginDOM, regDOM, loginoutDOM, personalDOM);
  var result = await whoAmI();
  if (result) {
    personalDOM.innerText = result.name;
    setVisible(true, loginoutDOM, personalDOM);
  } else {
    setVisible(true, loginDOM, regDOM);
  }

  loginoutDOM.onclick = async function (e) {
    e.preventDefault();
    await loginOut();
  };

})();

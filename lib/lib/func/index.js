// var ElementUI = require('element-ui');
// 是否为空
function isEmpty(obj) {
  if ([undefined, null, ''].includes(obj)) {
    return true;
  } else {
    // console.log("obj", obj);
    try {
      obj = obj.replace(/\s+/g, "");
    } catch (err) {
      // alert(err)
    }
    if (obj === "") {
      return true;
    }
  }
  return false;
};
// 复制到剪贴板
function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
  console.log('复制成功！');
  this.$message({ type: 'success', message: '复制成功！' });
  // ElementUI.Message.success('复制成功！')
}
// 深拷贝
function deepClone(e) {
  return JSON.parse(JSON.stringify(e));
};
// obj重置
function objReset(e) {
  Object.keys(e).forEach(function (i) {
    // console.log(i, e[i]);
    // let tp = typeof e[i]
    if (i == 'page') {
      e[i] = 1
    } else if (i == 'pageSize') {
      e[i] = 10
    } else {
      let isA = Array.isArray(e[i])
      e[i] = isA ? [] : "";
    }

  });
  return e;
};
// msg消息
function msg(message, type = 1, duration = 2000) {
  console.log('msg');
  let mode = ['error', 'success', 'warning', '']
  this.$message({ type: mode[type], message, duration });
}

// 只支持数字
function onlyNum() {
  return "value=value.replace(/[^\\d]/g,'')"
}
// 非0正整数
function onlyPlusNum() {
  return "value=value.replace(/\\D+|^0/g,'')"
}
// 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
function PasswordChecking() {
  return "value=value.replace(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,'')"
}
// 数字加逗号显示
function numFormat(num) {
  return (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
function isProduction(num) {
  return (process.env.NODE_ENV == "production");
}
function getUrlParam(name = '') {
  let t = window.location.href.split('?')
  if (t.length < 2) {
    return 'There are no parameters in the url'
  }
  const search = t[t.length - 1].replace(/\+/g, ' ')
  if (!search) {
    return false
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  console.log(obj);
  return obj
}
//获得两个数组之间的关系  默认求差集，传1时求交集
function arrayDifference(firstArr, secondArr, judgement) {
  let firstSet = new Set(firstArr);
  let secondSet = new Set(secondArr);
  if (judgement == 1) {
    return [...new Set([...firstSet].filter(x => secondSet.has(x)))]
  } else  {
    return [...new Set([...firstSet].filter(x => !secondSet.has(x)))]
  }
}


module.exports = { isEmpty, copyToClipboard, deepClone, objReset, msg, onlyNum, onlyPlusNum, numFormat, isProduction, getUrlParam, PasswordChecking, arrayDifference }
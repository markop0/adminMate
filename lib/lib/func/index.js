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
// 数字加逗号显示
function numFormat(num) {
  return (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
module.exports = { isEmpty, copyToClipboard, deepClone, objReset, msg, onlyNum, onlyPlusNum, numFormat }
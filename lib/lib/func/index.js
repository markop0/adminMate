/* 函数部分 */
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
// 简单 深拷贝 
function deepClone(e) {
  return JSON.parse(JSON.stringify(e));
};
// 递归 深拷贝 
function deepCopy(obj = {}) {
  //变量先置空
  let newobj = null;

  //判断是否需要继续进行递归
  if (typeof (obj) == 'object' && obj !== null) {
    newobj = obj instanceof Array ? [] : {};
    //进行下一层递归克隆
    for (var i in obj) {
      newobj[i] = deepCopy(obj[i])
    }
    //如果不是对象直接赋值
  } else newobj = obj;

  return newobj;
}
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
// 是否正服
function isProduction(num) {
  return (process.env.NODE_ENV == "production");
}
//获取url参数
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
  } else {
    return [...new Set([...firstSet].filter(x => !secondSet.has(x)))]
  }
}
// 二次确认
function secondConfirm(word = '文件', func, param, p1 = null, p2 = null) {
  // ElementUI.MessageBox.confirm
  this.$alert(`此操作将永久删除该${word}, 是否继续?`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    func(param, p1)
  }).catch(() => {
    ElementUI.Message.info('已取消删除')
  });
}

module.exports = { isEmpty, copyToClipboard, deepClone, deepCopy, objReset, msg, isProduction, getUrlParam, arrayDifference, secondConfirm }
import Vue from 'vue'
// 是否为空
Vue.prototype.isEmpty = function (obj) {
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
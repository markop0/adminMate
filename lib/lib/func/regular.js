/* 正则部分 */

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

module.exports = { onlyNum, onlyPlusNum, numFormat, PasswordChecking }
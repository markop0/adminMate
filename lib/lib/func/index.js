
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
}
module.exports = { isEmpty, copyToClipboard }
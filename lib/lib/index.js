
import './static/style/cssReset.css'
import './static/style/base.scss'
import { isEmpty, copyToClipboard, deepClone, objReset, msg, isProduction, getUrlParam, arrayDifference, deepCopy, secondConfirm } from './func/index'
import { onlyNum, onlyPlusNum, numFormat, PasswordChecking } from './func/regular'
import BarChart from './pkgs/barChart/index'
import LineChart from './pkgs/lineChart/index'
import Pagination from './pkgs/pagination/index'
import InsideSwitch from './miniTool/insideSwitch'
// import { from } from 'core-js/core/array'

const components = [
  BarChart, LineChart, Pagination
]

const install = function (Vue, opts = {}) {

  components.forEach(component => {
    Vue.component(component.name, component)
  })
  // fun
  Vue.prototype.isEmpty = isEmpty
  Vue.prototype.copyToClipboard = copyToClipboard
  Vue.prototype.deepClone = deepClone
  Vue.prototype.deepCopy = deepCopy
  Vue.prototype.objReset = objReset
  Vue.prototype.msg = msg
  Vue.prototype.isProduction = isProduction
  Vue.prototype.getUrlParam = getUrlParam
  Vue.prototype.arrayDifference = arrayDifference
  Vue.prototype.secondConfirm = secondConfirm
  // regular
  Vue.prototype.onlyNum = onlyNum
  Vue.prototype.onlyPlusNum = onlyPlusNum
  Vue.prototype.numFormat = numFormat
  Vue.prototype.PasswordChecking = PasswordChecking
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BarChart,
  LineChart,
  Pagination,
  InsideSwitch
}

import './static/style/cssReset.css'
import './static/style/base.scss'
import { isEmpty, copyToClipboard, deepClone, objReset, msg, onlyNum, onlyPlusNum, numFormat, isProduction, getUrlParam, PasswordChecking, arrayDifference } from './func/index'
import BarChart from './pkgs/barChart/index'
import LineChart from './pkgs/lineChart/index'
import Pagination from './pkgs/pagination/index'

const components = [
  BarChart, LineChart, Pagination
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.isEmpty = isEmpty
  Vue.prototype.copyToClipboard = copyToClipboard
  Vue.prototype.deepClone = deepClone
  Vue.prototype.objReset = objReset
  Vue.prototype.msg = msg
  Vue.prototype.onlyNum = onlyNum
  Vue.prototype.onlyPlusNum = onlyPlusNum
  Vue.prototype.numFormat = numFormat
  Vue.prototype.isProduction = isProduction
  Vue.prototype.getUrlParam = getUrlParam
  Vue.prototype.PasswordChecking = PasswordChecking
  Vue.prototype.arrayDifference = arrayDifference
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BarChart,
  LineChart,
  Pagination
}
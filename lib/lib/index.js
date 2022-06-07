/* 
import BarChart from './chart/barChart'
import LineChart from './chart/lineChart'
import { isEmpty, copyToClipboard } from './func/index'

const myPlugin = {
  // 第一个参数是传入的Vue，第二个参数可以插件的自定义参数
  install(Vue, options) {
    // 注册为组件
    Vue.component('BarChart', BarChart)
    Vue.component('LineChart', LineChart)

    Vue.prototype.isEmpty = isEmpty
    Vue.prototype.copyToClipboard = copyToClipboard
  }
}

// 最后将插件导出，并在main.js中通过Vue.use()即可使用插件
export default myPlugin */

import { isEmpty, copyToClipboard } from './func/index'
import BarChart from './pkgs/barChart/index'
import LineChart from './pkgs/lineChart/index'

const components = [
  BarChart, LineChart
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.isEmpty = isEmpty
  Vue.prototype.copyToClipboard = copyToClipboard
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BarChart,
  LineChart
}
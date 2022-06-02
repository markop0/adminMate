
import barChart from './chart/barChart'
import lineChart from './chart/lineChart'


const myPlugin = {

  // 第一个参数是传入的Vue，第二个参数可以插件的自定义参数
  install(Vue, options) {
    // 将其注册为vue的组件，'barChart'是组件名
    Vue.component('BarChart', barChart)
    Vue.component('LineChart', lineChart)
  }
}

// 最后将插件导出，并在main.js中通过Vue.use()即可使用插件
export default myPlugin


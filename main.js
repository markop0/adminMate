import Vue from 'vue'

// 自定义插件引入
import BarChart from './lib'
import LineChart from './lib'
// 使用插件
Vue.use(BarChart, LineChart);
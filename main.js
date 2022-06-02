import Vue from 'vue'

// 自定义插件引入
import BarChart from './lib/chart'
import LineChart from './lib/chart'
// 使用插件
Vue.use(BarChart);
Vue.use(LineChart);
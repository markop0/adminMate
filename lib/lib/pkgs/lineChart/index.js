import LineChart from './main'

LineChart.install = function (Vue) {
  Vue.component(LineChart.name, LineChart);
}

export default LineChart;
<template>
  <div
    ref="myChart"
    style="width: 100%; height: 100%"
    element-loading-text="图表加载中"
  ></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "BarChart",
  props: {
    chartData: {
      type: Object,
      default: () => {},
    },
  },
  // 数据格式
  // chartData = {
  //             xAxis: [],//x轴数据
  //             data: [[], []],//需要显示的数据类
  //             series: ["name", "name"],//数据类的图例名称
  //             smooth:bolean//是否曲线
  //             dataZoom:bolean//是否需要dataZoom
  //             location:'' //图例显示位置
  //           };
  data() {
    return {
      type: "",
      type1: "",
    };
  },

  mounted() {
    if (JSON.stringify(this.chartData) == "null") {
      return false;
    }

    let CD = this.chartData;
    let obj = [];
    let ser = CD.series;
    CD.data.forEach((item, idx) => {
      console.log(item);
      obj.push({
        name: ser[idx],
        type: "bar",
        data: item,
      });
    });
    console.log(obj);
    this.darwCharts(obj);
  },
  methods: {
    darwCharts(obj) {
      if (this.chartData.isClaim == "1") {
        this.type = "value";
        this.type1 = "category";
      } else {
        this.type = "category";
        this.type1 = "value";
      }
      console.log(this.$refs);
      var chartDom = this.$refs.myChart;
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "12%",
          containLabel: true,
        },
        xAxis: {
          type: this.type,
          boundaryGap: [0, 0.01],
          data: this.chartData.xAxis,
        },
        yAxis: {
          type: this.type1,
          data: this.chartData.yAxis,
        },

        series: obj,
      };
      if (this.chartData.location == "right") {
        option.legend["right"] = this.chartData.location;
      } else if (this.chartData.location == "left") {
        option.legend["left"] = this.chartData.location;
      } else {
      }
      console.log(option.xAxis);

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped></style>

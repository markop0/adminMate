<template>
  <div
    id="myEChart"
    style="width: 100%; height: 100%"
    v-loading="isLoading"
    element-loading-text="图表加载中"
  ></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "LineChart",
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
  //           };
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    let CD = this.chartData;
    if (this.isEmpty(CD)) {
      return;
    }
    let obj = [];
    let cArr = ["#3367d6", "#21bd9d"];

    let ser = CD.series;
    CD.data.forEach((item, idx) => {
      obj.push({
        name: ser[idx],
        type: "line",
        symbol: "circle",
        data: item,
        smooth: CD.smooth || false,
        dataZoom: CD.dataZoom || false,
        itemStyle: {
          normal: {
            color: cArr[idx],
            lineStyle: {
              color: cArr[idx],
            },
          },
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: cArr[idx],
            },
            {
              offset: 1,
              color: "#fff",
            },
          ]),
        },
      });
    });
    console.log(CD.series);
    this.darwCharts(obj);
  },
  methods: {
    darwCharts(obj) {
      var chartDom = document.getElementById("myEChart");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: this.chartData.series,
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "12%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            // saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.chartData.xAxis,
        },
        yAxis: {
          type: "value",
        },

        series: obj,
      };
      this.chartData.dataZoom &&
        (option["dataZoom"] = [
          {
            type: "inside",
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 100,
          },
        ]);
      myChart.setOption(option);
      this.isLoading = false;
    },
  },
};
</script>

<style></style>

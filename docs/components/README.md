# 组件

## BarChart (柱状图)

目前仅支持[echarts](https://echarts.apache.org/examples/zh/index.html#chart-type-bar)内基础柱状图的快速生成

<img src="../.vuepress/public/img/barChart1.png">

**代码示例**

```html
<BarChart :key="chartData1" :chartData="chartData1"></BarChart>
```

```js
data() {
    return {
      chartData1: null,
    };
  },
mounted() {
  this.chartData1 = {
    yAxis: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
    data: [[18203, 23489, 29034, 104970, 131744, 630230]],
    series: ["2008"],
  };
},

```

**属性**
| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| --------- | --------- |--------- | --------- |--------- |
| xAxis | x 轴数据名 |array |1 |— |
| data | 数据 |array |1 |— |
| series | 数据图例名称 |array |1 |— |
| isClaim | 柱状图显示样式 |number |0 |0 |

| aaaaa | aaaaa |aaaaa |aaaaa |aaaaa |

## LineChart (折线图)

## Pagination (分页)

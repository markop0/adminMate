# 组件

## BarChart (柱状图)

目前仅支持[echarts](https://echarts.apache.org/examples/zh/index.html#chart-type-bar)内基础柱状图的快速生成

<img src="../.vuepress/public/img/barChart1.png">

**代码示例**

```html
<BarChart :key="chartData + 1" :chartData="chartData" />
```

```js
data() {
    return {
      chartData: null,
    };
},
mounted() {
  this.chartData = {
    yAxis: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
    data: [[18203, 23489, 29034, 104970, 131744, 630230]],
    series: ["2008"],
  };
},

```

**属性**

| 参数     | 说明                          | 类型   | 是否必填 | 默认值 | 可选值      |
| -------- | ----------------------------- | ------ | -------- | ------ | ----------- |
| xAxis    | x 轴数据名                    | array  | true     | —      |
| data     | 数据，支持多组数据展示        | array  | true     | —      |
| series   | 数据图例名称                  | array  | true     | —      |
| isClaim  | 图表显示样式（垂直/水平）显示 | number | false    | 0      |
| location | 图例显示位置                  | string | false    | center | left，right |

## LineChart (折线图)

目前仅支持[echarts](https://echarts.apache.org/examples/zh/index.html#chart-type-bar)内基础折线图的快速生成

<img src="../.vuepress/public/img/lineChart1.png">

**代码示例**

```html
<LineChart :key="chartData + 1" :chartData="chartData" />
```

```js
data() {
    return {
      chartData: null,
    };
},
mounted() {
  this.chartData = {
      xAxis: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
      data: [
        [18203, 23489, 29034, 104970, 131744, 630230],
        [19325, 23438, 31000, 121594, 134141, 681807],
      ],
      series: ["2008", "2022"],
      isClaim: 1,
    };
},

```

**属性**

| 参数     | 说明                          | 类型   | 是否必填 | 默认值 | 可选值      |
| -------- | ----------------------------- | ------ | -------- | ------ | ----------- |
| xAxis    | x 轴数据名                    | array  | true     | —      |             |
| data     | 数据，支持多组数据展示        | array  | true     | —      |             |
| series   | 数据图例名称                  | array  | true     | —      |             |
| isClaim  | 图表显示样式（垂直/水平）显示 | number | false    | 0      |             |
| smooth   | 是否曲线                      | bolean | false    | false  |             |
| dataZoom | 是否需要 dataZoom             | bolean | false    | false  |             |
| location | 图例显示位置                  | string | false    | center | left，right |

## Pagination (分页)

**代码示例**

```html
<Pagination
  :total="total"
  :sParam="getParam"
  @getPageData="getData"
></Pagination>
```

```js
data() {
    return {
      total:0,
      getParam: {
        pageSize: 10,
        page: 1,
        //...
      },
    };
},
methods: {
  getData() {
    // 走接口
    doSomethingApi(this.getParam).then((res) => {
      if (res.code == 200) {
        // ...
        this.total = res.total;
      }
    });
  },
},
```

**属性**

| 参数      | 说明                         | 类型   | 是否必填 | 默认值       |
| --------- | ---------------------------- | ------ | -------- | ------------ |
| total     | 总条目数                     | number | true     | —            |
| getParam  | 查询参数                     | object | true     | —            |
| pageSizes | 每页显示个数选择器的选项设置 | array  | false    | [10, 20, 50] |

**事件**

| 事件        | 说明                     |
| ----------- | ------------------------ |
| getPageData | 查询数据所需走的接口方法 |

# 介绍

admin-mate

封装（二次封装）了一些开发 admin 后台系统常见的一些组件、图表、函数、样式的 admin web 开发工具库，基于 [element](https://element.eleme.cn/) + [echarts](https://echarts.apache.org/zh/index.html)

## Install （安装）

```shell
npm install admin-mate
```

## Quick Start （快速使用）

```javascript
import Vue from "vue";
//全局引用
import AdminMate from "admin-mate";
Vue.use(AdminMate);

// or 局部引用
import {
  BarChart,
  LineChart,
  // ...
} from "admin-mate";

Vue.component(BarChart.name, BarChart);
Vue.component(LineChart.name, LineChart);
```

::: warning 注意
本项目基于 element、echarts ，在使用前必须先引用好 element 和 echarts。
:::

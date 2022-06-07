# admin-mate

封装（二次封装）了一些开发 admin 后台系统常见的一些组件、图表、函数、样式的 admin web 开发工具库，基于 element、echarts。

[demo](https://reedbf.github.io/adminMate/).

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

## content （内容）

### component (组件)

BarChart (柱状图).
LineChart (折线图).
Pagination (分页).

### function（函数）

- isEmpty (是否为空).
- copyToClipboard (复制到剪贴板).
- deepClone (深拷贝).
- objReset (对象重置).
- msg (消息).
- onlyNum (仅支持数字).
- onlyPlusNum (仅支持正整数).
- numFormat (数值千分号格式化).

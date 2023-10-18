# 全局函数

**使用方法**

方法内直接 this.xxx()，dom 内 xxx()

## isEmpty (是否为空)

- **说明**：该方法会先过滤掉字符串内的空格符再做判断，该方法只有参数为 undefined、null、''、或者全部为空格的字符串才会返回 true，其它都返回 false
- **返回值** ：true / false
- **示例**：

```js
mounted() {
  console.log(this.isEmpty(undefined));  // true
  console.log(this.isEmpty(null));       // true
  console.log(this.isEmpty(''));         // true
  console.log(this.isEmpty('   '));      // true
  console.log(this.isEmpty('abc'));      // false
},
```

## copyToClipboard (复制到剪贴板)

- **说明**：该方法会把传入的参数复制到剪贴板
- **示例**：

```js
mounted() {
  this.copyToClipboard('test data')
},
```

## deepClone (深拷贝 简单)

- **说明**：该方法会返回一个深拷贝对象（只适用简单数据类型对象深拷贝，String 、Number、Array；复杂数据类型对象禁止使用该方法，推荐使用下面的 deepCopy）
- **示例**：

```js
mounted() {
  let data = {name:'Tom',age:'18'}
  let newData = this.deepClone(data)  //此时 data 和 newData 相对独立
},
```

## deepCopy (深拷贝 递归)

- **说明**：该方法会返回一个深拷贝对象（适用全部数据类型对象深拷贝，String 、Number、Array、NaN、undefined、unction、Infinity、Date）
- **示例**：

```js
mounted() {
  let data = {
    nan:NaN,
    infinityMax:1.7976931348623157E+10308,
    infinityMin:-1.7976931348623157E+10308,
    undef: undefined,
    fun: () => { console.log('叽里呱啦，阿巴阿巴') },
    date:new Date,
  }
  let newData = this.deepCopy(data)  //此时 data 和 newData 相对独立
},
```

## objReset (对象重置)

- **说明**：该方法会把传入对象的属性的值给清空，属性的类型如果为数组则会变成空数组,其它类型的属性则全部变成空字符串，并且该方法会自动重置对象中 page 字段重置为 1，pageSize 重置为 10 ，常用于接口传参 obj 的重置。
- **示例**：

```js
mounted() {
  let data = {name:'Tom',age:'18',favoriteFood:['米饭','棒棒糖']}
  let newData = this.objReset(data)  //  newData = { name:'' , age:'' , favoriteFood:[] }
},
```

## msg (Message 消息提示)

- **说明**：该方法精简了 element 的 Message 方法。
  0/1/2/3；分别对应 element Message 里的 error，success，warning，infor 4 种状态;
- **参数**：

  | 参数     | 说明                                  | 类型   | 是否必填 | 默认值 | 可选值 |
  | -------- | ------------------------------------- | ------ | -------- | ------ | ------ |
  | message  | 消息文本                              | string | true     | —      |        |
  | type     | 消息类型                              | number | false    | 1      | 0/1/2  |
  | duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | false    | 2000   |        |

- **示例**：

```js
mounted() {
  this.msg('操作成功')
  this.msg('操作失败',0)
},
```

## isProduction （是否生产环境）

- **说明**：该方法会返回是否生产环境的判断，类型为布尔值 true / false；（通常在动态配置正式环境与开发环境中使用）
- **示例**：

```js
mounted() {
  console.log(this.isProduction())  // true / false
},
```

## getUrlParam （获取地址栏参数）

- **说明**：该方法会返回从地址栏获取到的参数对象，类型为 obj
- **示例**：

```js
// url = 'https://github.com/?name=adminMate&birthday=2022&base=China'
mounted() {
  let o = this.getUrlParam() // o = { base: "China" , birthday: "2022" , name: "adminMate" }
},
```

## arrayDifference (比较两数组间的差异)

- **说明**：该方法会根据需求返回输入两个数组的交集，并集，差集
- **参数**：

  | 参数      | 说明                 | 类型   | 是否必填 | 默认值 | 可选值                    |
  | --------- | -------------------- | ------ | -------- | ------ | ------------------------- |
  | firstArr  | 用于比较的数组       | array  | true     | —      |                           |
  | secondArr | 用于比较的数组       | array  | true     | —      |                           |
  | judgement | 用于判断返回什么集合 | string | false    | —      | 默认求差集，传 1 时求并集 |

- **示例**：

```js
let firstArr = [1, 2, 3];
let secondArr = [3, 4, 5];
this.arrayDifference(firstArr, secondArr, 1); //返回[3] 交集
this.arrayDifference(firstArr, secondArr); //返回[1,2] 差集
```

## secondConfirm（二次确认）

- **说明**：该方法会弹出 element 的二次确认弹窗
- **参数**：

  | 参数  | 说明                               | 类型     | 是否必填 | 默认值 | 可选值 |
  | ----- | ---------------------------------- | -------- | -------- | ------ | ------ |
  | word  | 删除对象的名称，('文件','数据'...) | string   | true     | —      | —      |
  | func  | 点击确认后执行的函数               | function | true     | —      | —      |
  | param | 主要参数                           | function | true     | —      | —      |
  | p1    | 额外参数                           | any      | false    | null   | —      |

- **示例**：

```vue
<el-button
  @click="secondConfirm('分组', delType, item.groupId, index)"
>删除</el-button>
```

```js
delType(lsId, idx) {
  //do something ...
}
```

## shuffleArray （数组随机打乱）

- **说明**：该方法会随机打乱目标数组
- **参数**：

  | 参数  | 说明           | 类型  | 是否必填 | 默认值 | 可选值 |
  | ----- | -------------- | ----- | -------- | ------ | ------ |
  | array | 需要打乱的数组 | array | true     | —      | —      |

- **示例**：

```js
const myArray = [1, 2, 3, 4, 5];
shuffleArray(myArray);
console.log(myArray); // 随机打乱后的数组
```

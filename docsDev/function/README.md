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

## deepClone (深拷贝)

- **说明**：该方法会返回一个深拷贝对象
- **示例**：

```js
mounted() {
  let data = {name:'Tom',age:'18'}
  let newData = this.deepClone('test data')  //此时 data 和 newData 相对独立
},
```

## objReset (对象重置)

- **说明**：该方法会把传入对象的属性的值给清空，属性的类型如果为数组则会变成空数组,其它类型的属性则全部变成空字符串
- **示例**：

```js
mounted() {
  let data = {name:'Tom',age:'18',favoriteFood:['米饭','棒棒糖']}
  let newData = this.objReset(data)  //  {name:'',age:'',favoriteFood:[]}
},
```

## msg (消息)

- **说明**：该方法精简了 element 的 Message 方法。
  0/1/2；分别对应 element Message 里的 error，success，warning3 种状态;|
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

## numFormat (数值千分号格式化)

- **说明**：该方法会把传入的数值千分号格式化，返回的值为字符串
- **示例**：

```js
mounted() {
  console.log(this.numFormat(123456789))  // 123,456,789
},
```



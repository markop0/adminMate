# 正则操作

**说明** : 该模块内全部方法会处理对应数据，只允许对应的数据输入，通常在 input 内的 :onkeyup 内直接调用

## onlyNum (仅支持数字)

- **示例**：

```html
<el-input
  v-model="Phone"
  :onkeyup="onlyNum()"
  maxlength="11"
  placeholder="请填写联系电话"
  autocomplete="off"
></el-input>
<!-- 此时input内只能输入数字 -->
```

## onlyPlusNum (仅支持正整数)

- **示例**：

```html
<el-input
  :onkeyup="onlyPlusNum()"
  maxlength="11"
  placeholder="请输入正整数"
></el-input>
```

## numFormat (数值千分号格式化)

- **说明**：该方法会把传入的数值千分号格式化并返回，类型为字符串（通常用于金额的展示，或者数据大屏的数据展示）
- **示例**：

```js
mounted() {
  console.log(this.numFormat(123456789))  // 123,456,789
},
```

## PasswordChecking ()

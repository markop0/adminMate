# 正则操作

- **说明**：该模块内全部方法会处理对应数据，只允许对应的数据输入
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

## onlyNum (仅支持数字)

## onlyPlusNum (仅支持正整数)

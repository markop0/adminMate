<template>
  <div :style="cssVar">
    <el-switch
      :class="[sState ? 'sOpen' : 'sClose']"
      :width="wi"
      v-model="sState"
      :active-value="0"
      :inactive-value="1"
      :active-text="label[0]"
      :inactive-text="label[1]"
      active-color="#3367d6"
      @change="setSwitch()"
    ></el-switch>
  </div>
</template>
 
<script>
import {} from "@/api";
export default {
  props: {
    wi: {
      type: Number,
      default: 56,
    },
    label: {
      type: Array,
      default: ["打开", "关闭"],
    },
  },
  data() {
    return {
      sState: false,
    };
  },
  computed: {
    cssVar() {
      return {
        "--sTrue": "30",
        "--false": 100,
        "--red": "#5bdb5b",
      };
    },
  },
  mounted() {},
  methods: {
    setSwitch() {},
  },
};
</script>
 
<style lang='scss' scoped >
// /deep/ .sOpen .el-switch__core {
//   border-radius: 50px;
//   &::before {
//     counter-reset: progress var(--sTrue);
//     content: counter(progress);
//     position: absolute;
//     left: 21px;
//     font-size: 12px;
//     color: #232323;
//     background: var(--red);
//   }
// }
// /deep/ .sClose .el-switch__core {
//   border-radius: 50px;
//   &::before {
//     counter-increment: progress var(--false);
//     content: counter(progress);

//     position: absolute;
//     right: 21px;
//     font-size: 12px;
//     color: #fff;
//   }
// }
/deep/ .sOpen {
  .el-switch__label--left {
    margin-right: -56%;
    z-index: 1;
    font-weight: 500 !important;
  }
  .el-switch__label--right {
    display: none;
  }
}
/deep/ .sClose {
  margin-left: -35px;
  .el-switch__label--left {
    display: none;
  }
  .el-switch__label--right {
    margin-left: -56%;
    z-index: 1;
    font-weight: 500 !important;
    color: #fff;
  }
}
</style>
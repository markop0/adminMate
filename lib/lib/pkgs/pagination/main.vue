<template>
  <el-pagination
    @size-change="sizeChange"
    @current-change="currentChange"
    :current-page="sParam.page"
    :page-sizes="pageSizes"
    :page-size="sParam.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
  >
  </el-pagination>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: Number,
    sParam: {
      type: Object,
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 50];
      },
    },
    size: {
      type: String,
      default: "pageSize",
    },
    current: {
      type: String,
      default: "page",
    },
  },
  methods: {
    // 每页条数change
    sizeChange(val) {
      this.sParam[this.size] = val;
      this.$emit("getPageData");
    },
    // 当前页change
    currentChange(val) {
      this.sParam[this.current] = val;
      this.$emit("getPageData");
    },
  },
};
</script>

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
  },
  methods: {
    sizeChange(val) {
      this.sParam.pageSize = val;
      this.$emit("getPageData");
    },
    currentChange(val) {
      this.sParam.page = val;
      this.$emit("getPageData");
      
      
    },
  },
};
</script>

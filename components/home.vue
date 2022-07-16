<template>
  <div
    class="relative flex flex_ww items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <!-- <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    /> -->
    <div class="homeHead max-w-4xl mx-auto sm:px-6 lg:px-8">
      <!-- <a
        class="flex justify-center pt-8 sm:pt-0"
        href="https://nuxtjs.org"
        target="_blank"
      >
        <svg
          width="218"
          height="45"
          viewBox="0 0 159 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </a> -->
      <span @click="copyToClipboard('1+1=100*')">admin-mate</span>
      <span>{{ input }}</span>
      <el-input v-model="input" placeholder="请输入内容"></el-input>

      <!-- <div class="flex justify-center pt-4 space-x-2">
        <a href="https://github.com/nuxt/nuxt.js" target="_blank"
          ><svg
            class="w-6 h-6 text-gray-600 hover:text-gray-800 button--github"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
              fill="currentColor"
            /></svg
        ></a>
        <a href="https://twitter.com/nuxt_js" target="_blank"
          ><svg
            class="w-6 h-6 text-gray-600 hover:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
              fill="currentColor"
            /></svg
        ></a>
      </div> -->
    </div>
    <div class="mainBox">
      <div class="box test">
        <BarChart :key="chartData1 + 1" :chartData="chartData1" />
      </div>
      <div class="box test">
        <BarChart :key="chartData2 + 1" :chartData="chartData2" />
      </div>
      <div class="box test">
        <LineChart :key="chartData2 + 1" :chartData="chartData2" />
      </div>
      <div class="box w50p">
        <Pagination
          :total="courseTotal"
          :sParam="courseSinglList"
          @getPageData="getYzyCourse"
        />
        <div>
          <el-button type="success" @click="msg('成功按钮')"
            >成功按钮</el-button
          >
          <el-button type="info" @click="msg('成功按钮', 3)"
            >信息按钮</el-button
          >
          <el-button type="warning" @click="msg('警告按钮', 2)"
            >警告按钮</el-button
          >
          <el-button type="danger" @click="msg('危险按钮', 0)"
            >危险按钮</el-button
          >
          <el-button @click="copyToClipboard('http://localhost:8010/')"
            >复制url</el-button
          >
          <el-button @click="getUrlParam()">获取url参数</el-button>
          <el-button @click="secondConfirm('分组', delType, 330021, 3)"
            >删除</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      input: "",
      chartData1: null,
      chartData2: null,
      courseTotal: 50,
      courseSinglList: {
        page: 1,
        pageSize: 5,
      },
    };
  },
  mounted() {
    this.chartData1 = {
      yAxis: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
      data: [[18203, 23489, 29034, 104970, 131744, 630230]],
      series: ["2008"],
      location: "",
    };
    this.chartData2 = {
      xAxis: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
      data: [
        [18203, 23489, 29034, 104970, 131744, 630230],
        [19325, 23438, 31000, 121594, 134141, 681807],
      ],
      series: ["2008", "2022"],
      isClaim: 1,
      location: "left",
    };

    console.log(
      this.arrayDifference([1, 2, 3, 4, 5], [2, 4, 5, 6, 7, 8], "Union")
    );
  },
  methods: {
    getYzyCourse() {},
    delType(lsId, idx) {
      //do something ...
    },
  },
};
</script>
<style lang="scss" scoped>
.homeHead {
  width: 100vw;
}
.test {
  width: 400px;
  height: 300px;
}
.mainBox {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  .box {
    border: 1px solid #cbcbcb;
    min-width: 25vw;
    min-height: 16vw;
  }
}
</style>

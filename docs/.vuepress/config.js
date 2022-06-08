
module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'admin-mate',
  description: '组件库',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    [
      "script",
      {
        src: "https://at.alicdn.com/t/font_2849934_v6y652peian.js",
      },
    ],
    ['link', {
      rel: 'icon',
      href: '/img/logo.png'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/img/logo.png',
    // displayAllHeaders: true,// 默认值：false
    lastUpdated: 'Last Updated', // string | boolean
    // sidebarDepth: 2, // 侧边栏显示2级
    // darkMode: true,

    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: '组件',
        link: '/components/'
      },
      {
        text: '函数',
        link: '/function/'
      },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'LanguageMenu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    // sidebar: 'auto',
    sidebar: [

      //   // collapsable: false, // 可选的, 默认值是 true,
      //   // sidebarDepth: 2,    // 可选的, 默认值是 1

      {
        title: '介绍',
        path: 'document/',
        collapsable: false,
        children: [ /* ... */],
        sidebarDepth: 2,
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },
      {
        title: '组件',
        path: 'components/#component-组件',
        children: [ /* ... */],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },
      {
        title: '函数',
        path: 'function/',
        children: [ /* ... */],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ],





  }
}

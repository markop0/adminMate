
module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'admin-mate',
  description: '组件库',
  base: '/adminMate/',  //打包才开启
  head: [
    [
      "script",
      {
        src: "https://at.alicdn.com/t/font_2849934_v6y652peian.js",
      },
    ],
    ['link', {
      rel: 'icon',
      href: '/img/logo.png'
    }],
  ],
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/img/logo.png',
    // displayAllHeaders: true,// 默认值：false
    lastUpdated: 'Last Updated', // 最后更新时间 string | boolean
    smoothScroll: true,
    // sidebarDepth: 2, // 侧边栏显示2级
    // darkMode: true,

    nav: [
      // {
      //   text: 'Home',
      //   link: '/'
      // },
      {
        text: '组件',
        link: '/components/'
      },
      {
        text: '函数',
        link: '/function/'
      },
      { text: 'feedback', link: 'https://github.com/reedbf/adminMate/issues' },
      { text: 'GitHub', link: 'https://github.com/reedbf/adminMate' },

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

      // collapsable: false, // 可选的, 默认值是 true,
      // sidebarDepth: 2,    // 可选的, 默认值是 1

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
      },
      {
        title: '正则',
        path: 'function/Regular',
        children: [ /* ... */],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ],





  }
}

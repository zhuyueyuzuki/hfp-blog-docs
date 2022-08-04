const { defaultTheme } = require('@vuepress/theme-default')
module.exports = {
  theme: defaultTheme({
    logo: '/favicon.png',
    sidebar: 'auto', // 自动生成侧边栏
    // sidebar: 'structuring',
    navbar: [
      { text: '主页', link: '/', },
      { text: '作品', link: '/maindocs/works', },
      { text: '翻译作品', link: '/maindocs/translate_works', },
      {
        text: '相关',
        children: [
          { text: 'MCBBS 小组', link: 'https://www.mcbbs.net/group-2182-1.html',},
        ],
      } 
    ], // 顶部栏配置
    displayAllHeaders: true, // 默认值：false
    sidebarDepth: 2,
    lastUpdated: '最后更新于',
    smoothScroll: true,
    repo: 'https://github.com/Heart-Fire-Project/hfp-blog-docs',
    repoLabel: 'Github',
    docsRepo: 'Heart-Fire-Project/hfp-blog-docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nextLinks: true,
    prevLinks: true
  }),
  title: 'Heart Fire Project',
  lang: 'zh-CN',
  description: '提供 Heart Fire Project 相关文档',  
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ]
}

export default {
  title: '我的笔记本',
  titleTemplate: 'Collection & Favorite',
  description: 'Just record',
  lang: 'zh-CN',
  lastUpdated: true,
  base: '/Notebook',
  cleanUrls: 'with-subfolders',
  themeConfig: {
    nav: [
      {
        text: '操作系统',
        items: [
          { text: 'Linux', link: '/linux/' },
          { text: 'Boot', link: '/boot' },
        ]
      },
      {
        text: 'Web',
        items: [
          { text: 'Browser', link: '/browser' },
          // { text: 'HTML', link: '/html' },
          // { text: 'CSS', link: '/css' },
          // { text: 'JavaScript', link: '/javascript' },
          // { text: 'Vue', link: '/vue' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Linux',
        collapsible: true,
        items: [
          { text: 'Linux 服务器的安全强化', link: '/linux/linux-security' },
        ]
      },
      {
        text: 'Browser',
        collapsible: true,
        items: [
          { text: '浏览器如何工作', link: '/browser/how-does-browser-work' },
        ]
      },
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Evandoz/Notebook' },
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: `&copy ${new Date().getFullYear()} Evandoz`
    }
  }
}

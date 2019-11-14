module.exports = {
  title: 'Notebook',
  description: 'Levan\'s Notebook',
  dest: './dist/',
  base: '/Notebook/',
  repo: 'https://github.com/Evandoz/Notebook',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Linux', link: '/Linux/' },
      { text: 'Web', link: '/Web/' },
      { text: 'Boot', link: '/Boot/' },
    ],
    sidebar: {
      '/Linux/': [
        'Linux-Security',
        'Linux-Performance'
      ],
      '/Web/': [
        'How-Does-Browser-Work'
      ],
      '/Boot/': [

      ]
    }
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: ['autobar']
}

import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小潘哥博客",
  description: "小潘哥欢迎您",
  // 自定义主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
     logo: '/avatar.png', // 表示docs/public/avartar.png
    // 导航栏配置
    nav: nav,
    // 侧边栏配置
    sidebar: sidebar,
    // 社交链接配置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 锚点导航配置
    outline: {
      label: '目录',
      level: [2, 6],
    }
  }
})

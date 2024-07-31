import { defineConfig } from 'vitepress'

import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: generateSidebar([
      {
        documentRootPath: 'docs',
        scanStartPath: 'docs/sop',
        resolvePath: '/docs/sop/',
        useTitleFromFileHeading: true,
        sortMenusByFrontmatterDate: true,
        useFolderLinkFromIndexFile: true,
        hyphenToSpace: true,
        excludeFolders: [],
        collapsed: true
      }
    ]),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

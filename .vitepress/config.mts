import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: "Lymane 的个人博客",
  description: "哈哈你看这事闹的",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "JavaScript", link: "/javascript/index" },
      // { text: "Examples", link: "/markdown-examples" },
    ],
    logo: "https://lymane-image.oss-cn-wuhan-lr.aliyuncs.com/my-avatar.png",
    sidebar: [],
    socialLinks: [{ icon: "github", link: "https://github.com/lymane" }],
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/",
  outDir: "docs/.vitepress/dist",
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: "/",
  collapsed: false,
  capitalizeFirst: true,
};

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions)
);

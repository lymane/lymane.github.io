import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const vitePressOptions = {
  title: "Lymane 的个人博客",
  description: "哈哈你看这事闹的",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "JavaScript", link: "/docs/frontend/javascript/index" },
    ],
    logo: "https://lymane-image.oss-cn-wuhan-lr.aliyuncs.com/my-avatar.png",
    sidebar: [],
    socialLinks: [{ icon: "github", link: "https://github.com/lymane" }],
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/",
  outDir: "docs/.vitepress/dist",
};

function makeSidebarFor(folder: string) {
  return {
    documentRootPath: "docs", // 相对路径，不要写成 /docs
    scanStartPath: folder,
    resolvePath: `/docs/${folder}/`, // 必须包含 docs 前缀，和访问路径一致
    basePath: `/docs/${folder}/`,
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: false,
    includeFolderIndexFile: true,
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    capitalizeEachWords: false,
    collapsed: false,
    collapseDepth: 2,
  };
}

const vitePressSidebarOptions = [
  makeSidebarFor("diary"),
  makeSidebarFor("frontend"),
];

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions)
);

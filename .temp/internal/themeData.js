export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"前端基础\",\"children\":[{\"text\":\"HTML\",\"link\":\"/basic/HTML.md\"},{\"text\":\"CSS\",\"link\":\"/basic/CSS.md\"},{\"text\":\"JavaScript基础\",\"link\":\"/basic/JavaScript基础.md\"}]},{\"text\":\"计算机基础\",\"children\":[{\"text\":\"计算机网络基础\",\"link\":\"/basic/HTML.md\"},{\"text\":\"计算机组成原理\",\"link\":\"/basic/HTML.md\"},{\"text\":\"数据结构与算法\",\"link\":\"/basic/HTML.md\"}]},{\"text\":\"读书笔记\",\"children\":[{\"text\":\"图解TCP/IP\",\"link\":\"/notes/图解TCPIP.md\"}]},{\"text\":\"项目总结\",\"children\":[{\"text\":\"柜面poc项目\",\"link\":\"/project/柜面poc项目.md\"},{\"text\":\"南海poc项目\",\"link\":\"/project/南海poc项目.md\"},{\"text\":\"微信管理平台\",\"link\":\"/project/微信管理平台.md\"},{\"text\":\"上海银行排队项目\",\"link\":\"/project/上海银行排队项目.md\"},{\"text\":\"渠道一体化项目迁移\",\"link\":\"/project/渠道一体化项目迁移.md\"},{\"text\":\"渠道一体化项目开发者平台\",\"link\":\"/project/渠道一体化项目开发者平台.md\"},{\"text\":\"海南柜面项目\",\"link\":\"/project/海南柜面项目.md\"}]},{\"text\":\"Java学习\",\"children\":[{\"text\":\"Java基础\",\"link\":\"/Java/Java基础.md\"}]},{\"text\":\"other\",\"children\":[{\"text\":\"布局\",\"link\":\"/other/布局.md\"},{\"text\":\"环境变量\",\"link\":\"/other/环境变量.md\"}]},{\"text\":\"网络安全\",\"children\":[{\"text\":\"网络安全\",\"link\":\"/network/网络安全.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { join } from "path";
import { readdirSync } from "fs";

function getNav(folder) {
  const path = join("E:\\work\\my-blog\\docs", folder);
  const file_list = readdirSync(path);
  const children = [];
  for (let i = 0; i < file_list.length; i++) {
    children.push({
      text: file_list[i].slice(0, -3),
      link: `/${folder}/${file_list[i]}`,
    });
  }
  return children;
}

export default defineUserConfig({
  base: "/blog/",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: "基础",
        children: getNav("basic"),
      },
      {
        text: "Java知识",
        children: getNav("java"),
      },
      {
        text: "网络知识",
        children: getNav("network"),
      },
      {
        text: "读书笔记",
        children: getNav("notes"),
      },
      {
        text: "其他",
        children: getNav("other"),
      },
    ],
  }),
});

@echo off

:: 确保脚本抛出遇到的错误
set -e

:: 生成静态文件
npm run docs:build

:: 进入生成的文件夹
cd docs/.vuepress/dist

:: 初始化 Git 仓库
git init

:: 将所有文件添加到版本控制
git add -A

:: 提交变更
git commit -m "deploy"

:: 强制推送到远程仓库的 gh-pages 分支
git push -f git@github.com:kikii9/myBlog.git master:gh-pages

:: 返回上一级目录
cd ..
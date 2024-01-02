---
sidebar: auto
---
# nvm安装node

### 下载安装

地址：https://github.com/coreybutler/nvm-windows/releases

### 查看版本

```
nvm -v
```



### 配置国内镜像

```
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/
```



### 查看可安装node列表

```
nvm ls available
```



### 安装nodejs

```
nvm install 18.16
```

### 使用nodejs

```
nvm use 18.16
```



### 查看安装的node

nvm ls
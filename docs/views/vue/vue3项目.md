---
sidebar: auto
---

# vue3项目



## 一、项目初始化

### 1.Vite

https://cn.vitejs.dev/

使用 PNPM（高性能的npm）

```
npm i -g pnpm
pnpm -v
```

创建项目

```
pnpm create vite
```

安装依赖

```
pnpm i
```

自动打开浏览器

package.json

```
  "dev": "vite --open",
```

###  2. eslint

 安装eslint 代码检测

```
pnpm i eslint -D
```

生成配置文件

```
npx eslint --init
```



### 3.src别名

用@符号替换./src

vite.config.ts

```ts
//@ts-ignore
import path from 'path'
```

```ts
  resolve:{
    alias:{
      "@":path.resolve("./src")
    }
  }
```

tsconfig.json

compilerOptions

```json
    "baseUrl": "./",
    "paths": {
      "@/*":["src/*"]
    }
```

### 4.环境变量

.env.development

```
# development
# console.log(import.meta.env)

NODE_ENV = 'development'

VITE_APP_TITLE = '开发环境'

VITE_APP_BASE_API= 'https://api.development.xxx.com'
```

.env.production

```
# production

NODE_ENV = 'production'

VITE_APP_TITLE = '开发环境'

VITE_APP_BASE_API= 'https://api.production.xxx.com'
```

### 5.element-plus

https://element-plus.org/zh-CN/guide/installation.html

安装

```
pnpm install element-plus
```

快速开始

https://element-plus.org/zh-CN/guide/quickstart.html

国际化

https://element-plus.org/zh-CN/guide/i18n.html

### 6.svg使用

安装

```
pnpm i vite-plugin-svg-icons -D
```

main.ts

```
import 'virtual:svg-icons-register'
```

创建svg文件夹

src/assets/icons

vite.config.ts

```
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; 
```

```ts
createSvgIconsPlugin({
            // 指定svg文件夹
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]'  
        })
```

使用

src/assets/icons/welcome.svg

```vue
    <svg style="width: 300px;height: 300px;;">
      <use xlink:href="#icon-welcome" fill="red"></use>
    </svg>
```

### 7.注册全局组件

普通main.ts引入

```ts
import SvgIcon from './components/SvgIcon.vue';
app.component('SvgIcon', SvgIcon)
```

自定义组件统一全局注册

/components/index.ts

```ts
//引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue';
import Pagination from './Pagination/index.vue'
//全局对象
const allGloablComponent: any = { SvgIcon, Pagination };
//对外暴露插件对象
export default {
    //务必叫做install方法
    install(app: any) {
        //注册项目全部的全局组件
        Object.keys(allGloablComponent).forEach(key => {
            //注册为全局组件
            app.component(key, allGloablComponent[key]);
        });
    }
}
```

main.ts

```ts
import gloalComponent from '@/components';
app.use(gloalComponent);
```

### 8.sass使用

安装

```
pnpm install -D sass
pnpm install -D sass-loader
```

使用

```scss
<style scoped lang="scss">
  .box{
    width: 300px;
    height: 200px;
    background-color: red;
    .son{
      width: 100px;
      height: 100px;
      background-color: yellow;
    }
  }
</style>
```

全局样式

/styles/index.scss  中引入 /styles/reset.scss

```scss
@import './reset.scss';
```

main.ts

```
import '@/styles/index.scss'
```

全局变量$

/styles/variable.scss

```scss
$color:blue;
```

vite.config.ts

```ts
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
```

变量使用

```scss
background-color: $color;
```



### 9.mock

安装

```
pnpm install -D vite-plugin-mock mockjs
```

根目录创建 mock 文件夹

/mock/user.ts

```ts
export default [
    // 用户登录接口
    {
        url: '/api/user/login',//请求地址
        method: 'post',//请求方式
        response: ({ body }) => {
            //获取请求体携带过来的用户名与密码
            const { username, password } = body;
            //调用获取用户信息函数,用于判断是否有此用户
            const checkUser = createUserList().find(
                (item) => item.username === username && item.password === password,
            )
            //没有用户返回失败信息
            if (!checkUser) {
                return { code: 201, data: { message: '账号或者密码不正确' } }
            }
            //如果有返回成功信息
            const { token } = checkUser
            return { code: 200, data: { token } }
        },
    },
]
```

vite.config.ts

```ts
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig({
  plugins: [
    viteMockServe({
      localEnabled: true // 是否开启开发环境
    })
  ]
})
```

解决if (!require.cache) { ^ReferenceError: require is not defined}报错

/node_modules/vite-plugin-mock/dist/index.mjs

加入以下

```
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
```

页面使用

```ts
  axios({
    url: '/api/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111'
    }
  }).then((res) => {
    console.log(res);
  })
```

### 10.axios


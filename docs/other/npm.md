# npm

## 常用命令


1. `npm init`：初始化一个新的 npm 项目，并创建一个 `package.json` 文件。
2. `npm install`：根据 `package.json` 文件中的依赖信息，安装项目所需的所有依赖库。
3. `npm install <package-name>`：安装指定的包，并将其添加到 `package.json` 文件的 `dependencies` 或 `devDependencies` 对象中。
4. `npm uninstall <package-name>`：卸载指定的包，并将其从 `package.json` 文件的 `dependencies` 或 `devDependencies` 对象中移除。
5. `npm update`：检查并更新项目的依赖库到最新版本。
6. `npm outdated`：检查项目的依赖库是否有新的版本可用。
7. `npm search <package-name>`：搜索指定名称的包。
8. `npm run <script-name>`：运行在 `package.json` 文件中定义的脚本命令。
9. `npm publish`：发布您的包到 npm 注册表，使其可以供其他人使用。
10. `npm config set <key> <value>`：设置 npm 的配置选项。

## 常用修饰符

1. `-g` 或 `--global`：将包安装到全局环境中，而不是当前项目。

   例如：`npm install -g <package-name>`

2. `--save` 或 `--save-prod`：将包安装为生产依赖，并将其添加到 `dependencies` 对象中。

   例如：`npm install <package-name> --save`

3. `--save-dev` 或 `--save-dev`：将包安装为开发依赖，并将其添加到 `devDependencies` 对象中。

   例如：`npm install <package-name> --save-dev`

4. `--quiet`：减少命令的输出信息，只显示警告和错误。

   例如：`npm install --quiet <package-name>`

5. `--force`：强制执行命令，忽略任何警告或错误。

   例如：`npm install --force <package-name>`
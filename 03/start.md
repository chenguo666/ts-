1. npm init --yes
2. npm i typescript -g
3. tsc --init
4. 修改 tsconfig.json 中的配置
   'outDir':'./dist' --outDir 是 ts 编译后生成 js 文件保存的目录
   'rootDir':'./src' --rootDir 是自己编写的 ts 源文件所在的目录
   注意 dist src package.json 必须在同一个目录下
5. 编译 src 目录以及子目录下的 ts 文件
   tsc 【src 当前目录下 输入 src 注意直接写 stc 命令就可以】
   会把 src 目录以及子目录下的 ts 文件全部编译成 js 文件 并全部输出到 dist 文件夹中
6. 安装 ts-node ts-node 让 node 可以直接运行 ts 代码
   全局安装 npm i ts-node -g
   本地安装 npm i ts-node -D
7. 安装 nodemon 自动检测工具 可以自动检测到目录中文件更改时通过重新启动应用程序来调试
   全局安装 npm i nodemon -g
   本地安装 npm i nodemon -D
8. 在配置文件中添加自动检测 自动重启应用
   'script':{
   'dev':'nodemon --watch src/ -e ts --exec ts-node ./src/index.ts'
   }
   'nodemon --watch src/ 表示检测目录是 package.json 同级目录
   -e ts 表示 nodemon 命令准备将要监听的 ts 后缀的文件
   --exec ts-node ./src/app.ts 表示检测到 src 目录下有任何变化都要重新执行 app.ts 文件

## parcel 打包支持浏览器运行 ts 文件

1. 安装 parcel 打包工具 npm install parcel-bundler --save-dev
2. 在 package.json 中给 npm 添加启动项 支持启动 parcel 工具包
   'script':{
   'start':'parcel ./index.html'
   }
3. 启动 parcel 工具包 npm run start

2-10 看完

## angular 学习笔记：
1. 可能需要更新 node.js 版本
```sh
npm install -g n 
n latest
```
如果不行，则手动下载安装

2. 安装与使用：
```sh
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve --open #如果安装包的时候有问题，可以先： cnpm i 安装，再运行 ng serve
#使用 --open（或 -o）参数可以自动打开浏览器并访问 http://localhost:4200/。

```

3. 设置淘宝镜像：
```sh
# 安装 cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 配置 ng
ng set --global packageManager=cnpm 
```
但发现新版的则不行，需要使用：
```sh
ng config <jsonPath> --options
```
但 jsonPath 不知是什么？

4. ng serve 报错的问题：
  可能停在95%，则可以试试：

  1. 把node_modules删除，然后用npm i 安装@angular/cli
  2. 或使用 yarn 来安装

5. ajax返回值的数据类型怎样定义？

6. 定义数据类型是用interface还是class好？ Hero中使用了class 。

7. 


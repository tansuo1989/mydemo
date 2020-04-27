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
  可能停在95%，则可以试试：把node_modules删除，然后用npm i 安装@angular/cli,或使用 yarn 来安装

5. ajax返回值的数据类型怎样定义？

6. 定义数据类型是用interface还是class好？ Hero中使用了class 。

7. 根模块不需要exports吗？
  把 AppComponent 放到 exports 中只是为了演示导出的语法，这在本例子中实际上是没必要的。 根模块没有任何理由导出任何东西，因为其它模块永远不需要导入根模块。
  来自：[这里](https://www.angular.cn/guide/architecture-modules)

  但 main.ts中不是需要使用吗？

8. angular 中的惰性加载是怎么回事？
9. angular中怎样使用多个NgModule ?
解答：把不同的NgModule加载到根模块下即可，多路由模块配置的时候需要注意：
子路由模块中使用：
```javascript
imports: [
    RouterModule.forChild(r),
  ],
```
根路由中使用：
```javascript
   imports: [ RouterModule.forRoot(r) ]
```


10. angular 的路由有问题：通过ng build后产生的应用，除了根目录外通过url不能直接访问页面，那么，每个页面生成的url有什么意义？
    另外，angular的路由是：www.aa.com/home/about 形式的，并不是#/url形式，后端需要url重写才行
 解答：文档说明[在这里](https://www.angular.cn/guide/router#browser-url-styles)
 默认使用“HTML 5 pushState”风格路由，如果使用服务端渲染需要使用这个，如果是纯前端的应该使用HashLocationStrategy 策略
 使用方法：
```javascript
   //app-routeing.modules.ts或app.module.ts中:
   RouterModule.forRoot(routes, { useHash: true })  // .../#/home/about
``` 
11. 组件间通讯？
@Input @Output
[见文档](https://www.angular.cn/guide/component-interaction)

12. 常用的 angular-cli 命令：
[全部指令](https://github.com/angular/angular-cli/wiki/serve)
```sh
## 创建一个 angular 项目：
ng new progectname

## 启动：
ng serve
ng serve --port 3333

## 创建组件/页面
ng g component pagename -m app/src/common/co ## 指定添加到 commn/co 模块 默认添加到根模块
## 怎样只添加到路由模块？

```

13. 过滤器，见文档：
 [管道](https://www.angular.cn/guide/pipes)

14. 整体架构设计：
* 使用一个根 module 和多个 子 module 的架构
* 路由模块可以直接放到相应的（根或子）模块中，因为普通模块基本结构固定，要写的只是路由模块

15. 一个组件可以在多个子模块中同时使用吗？

16. 创建 pipe 时不能添加目录？
```sh
ng g pipe filter -m app ##成功
ng g pipe filter/index -m app  ##失败，所以要在其它目录创建 pipe ，只能手动添加
```

17. 一个 pipe 文件只有创建一个管道吗？
  解答：可以在模版中直接使用函数来达到过滤器的目的

18. 模版中使用 *ngFor 和 *ngIf 使用在对应的 NgMoudule 中引入： CommonMoudle 
    否则会报错：
  ```sh
  Can't bind to 'ngForIn' since it isn't a known native property
  ``` 

19. ng 几个命令的起始目录：
* ng g component page //当前目录
* ng g module module/home // src/app
* ng g pipe pipe/test // 当当前目录在src/app及以上时，根目录是： src/app 可以添加目录，但不能通过 -m指定模块，命令行只能添加到根模块
* ng g service service/home // src/app 不能通过 -m 指定模块，也没有自动添加到任何模块
* ng g directive app/directive/mytest app/home/modue //当前目录

20. 两个项目部的说明：
* hello 测试各种功能的实现方式
* hi 结合多模块和路由等，项目结构比较清晰



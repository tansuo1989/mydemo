
# 从jQuery.js 中单独打包ajax部分代码 

1. 下载jQuery的代码：
```sh
 git clone git://github.com/jquery/jquery.git
 ```

2. 全局安装 grunt-cli:
```sh
 cnpm -i grunt-cli -g
 ```

3. 安装依赖
```sh
  cd jquery

  cnpm -i  
```
4. 单独打包ajax 模块 （即不包括其它模块）
 
 ```sh
 grunt custom:-css,-deprecated,-dimensions,-effects,-event,-offset,-wrap,-core/ready,-sizzle
 # 注：添加了-deferred 后打包出来的就找不到$.ajax了，按jQuery.js的文档应该是可以不要这个的。
 ```
 
 
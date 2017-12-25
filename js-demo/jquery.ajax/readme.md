
# 从jQuery.js 中单独打包ajax部分代码 

1. 下载jQuery的代码：

 git clone git://github.com/jquery/jquery.git

2. 全局安装 grunt-cli:

 cnpm -i grunt-cli -g

3. 安装依赖
  cd jquery

  cnpm -i  

4. 单独打包ajax 模块 （即不包括其它模块）
 
 grunt custom:-css,-deprecated,-dimensions,-effects,-event,-offset,-wrap,-core/ready,-deferred,-sizzle

 

## java-web 最简单是的代码

1. 安装好 tomcat 并添加好环境变量后
2. 在 webapps 中建一个文件夹 demo
3. 文件夹结构：

  -demo

    --src(文件夹，放编译前的.java 文件,当然可以放到其它地方)

    --WEB-INF （文件夹，注意文件夹的名称一定是 WEB-INF ，并注意中间的是-而不是_;)

      --classes (文件夹，放编译后的.class 文件)

      --lib (文件夹，放其它需要引入的.jar 文件，可以不需要)

      --web.xml (这个文件相当重要，相当于路由配置，具体格式风文件)

  当然上面的结构还可以更简单一些：只要WEB-INF/classes/Hello.class和WEB-INF/web.xml 两个文件就可以。
 4. 放好代码好，双击 tomcat/bin/startup.bat 文件运行 tomcat
 5. 在浏览器中打开：localhost:8080/demo/Hello 就应该可以看到 Hello.java 中实现的东西了。

       

                
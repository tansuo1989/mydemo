## ionic 1 学习笔记：
1. 生成多项目的时候
```sh
ionic start myproject  #(这个myproject可以随意命名，不要和以前的重复就可以了)

.......................
项目目录结构：
index.html (需要引入ionic.bundle.min.js和ionic.min.css文件)
css/
js/
lib/
   ionic/
        css/
           ionic.min.css
        js/
          ionic.bundle.js  
templates/
.......................
//主要代码在于templates中写模板的代码，js代码一般写到js下的*.js文件，而css样式全局的写到css目录下，在index.html中引进，页面内的则直接在页面内加<style></style>写在里面。


## 打包应用
cd myproject 
(需要安装安卓的开发环境)

ionic platform add android
ionic build android
ionic emulate android #(在虚拟机中运行)
```

2. 在ionic中集成crosswalk（可加快运行速度，但包会更大）
```sh
ionic browser add crosswalk
```

3. tabs页面的设置：
```html
<ion-tabs class="tabs-icon-top tabs-stable tabs-positive {{hideTabs}}">

    <ion-tab title="首页"  href="#/tab/home"> //表示点击后链接所在的页面
        <ion-nav-view name="tab-home"></ion-nav-view>//
               表示一个视图页面，名为tab-home，上面链接的页面将在这个视图内打开
    </ion-tab>

    <!-- Account Tab -->
    <ion-tab title="这里是标题"  href="#/tab/bbs">
        <ion-nav-view name="tab-bbs"></ion-nav-view>
    </ion-tab>

</ion-tabs>
```

* 对应的路由设置：
```javascript
$stateProvider
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })  //这是选项卡的模板设置

            .state('tab.home', {  //tab.home表示当前的路由home是在tab之下的
                url: '/home',  //对应的准确路由是：#/tab/home
                cache: false,
                views: {
                  'tab-home': {  //模板展示的位置，必须是选项卡“四”个视图名称之一
                        templateUrl: 'templates/home.html', //模板所在路径
                        controller: 'HomeCtrl'   //对应控制器的名称
                    }
                }
            })
```

4. 当没有使用选项卡的时候，路由也可以这样写:
```javascript
 $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller:'homeCtrl'
            })
            .state("login",{
            	url:"/login",
            	templateUrl:"templates/login.html"
            })
         $urlRouterProvider.otherwise('/home');
```

5. 指令：（封装html标签）（三个文件中作出修改）

directive.js文件：
```javascript
Var app=angular.module(“app.directive”,[]); //加载指令模块
App.directive(“myHello”,function(){  //如果标签是my-hello，则指令名应该是：myHello
Return{
  Restrict:”E”，//元素（ E）、属性（ A）、类（ C）或注释（ M）
  Template:”<div class=”red”>你们好呀</div>”;
  Replace:true
}
//经这样封闭后，html代码中的<my-hello></my-hello>标签就会被<div class=”red”>你们好呀</div> 所代替。
}
// index.html文件中引入：
<script src="js/directive.js"></script>
app.js中加载指令模块：
angular.module("io",['ionic','io.controller','io.directive'])
```

6. 当用选项卡进行导航的时候，默认的返回按钮就会失效：
```html
<ion-nav-back-button>
</ion-nav-back-button>
<!-- 当用顶部或者底部导航的时候，返回就会生效 -->
```

7. 顶部标题的设置：（放在index.html页面）
```html
<ion-nav-bar class="bar-positive text-center">
  <ion-nav-back-button>
 </ion-nav-back-button>
</ion-nav-bar>
<!-- 每个被包涵的页面： -->
<ion-view title="{{title}}"> //这里写title,就会显示在顶部
<ion-content>  //要加<ion-content>标签，页面内容才不会被顶部导航挡住
页面内容放这里
</ion-content>
</ion-view>
```


 	 

8. ionic中怎样写公共的函数？

不同控制器之间怎样共享函数（方法）？
答：用服务service （有多种创建方式）
例如：（也可以用factory方式创建）
```javascript
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
// 控制器中使用：
app.controller('myCtrl', function($scope, hexafy) {
    $scope.hex = hexafy.myFunc(255);
});

// 过滤器中使用:
app.filter('myFormat',['hexify', function(hexify) {
    return function(x) {
        return hexify.myFunc(x);
    };
}]);
// 页面中使用过滤器：
```
```html
<ul>
    <li ng-repeat="x in counts">{{x | myFormat}}</li>
</ul>
```


9. ionic中的文件与方法总结:

* 常用JS文件类型：app.js   controller.js   fiter.js   server.js   directive.js  五种
* 常用的主要方法：run  server   config  controller   

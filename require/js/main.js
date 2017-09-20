
//推荐阅读：http://www.ruanyifeng.com/blog/2012/11/require_js.html

requirejs.config({
    //baseUrl: '',
    //这里设置的路径是相对与baseUrl的，不要包含.js
    paths: {
        'test': 'test',
        'jquery':"https://cdn.bootcss.com/jquery/1.6.3/jquery.min",
        'underscore':"https://cdn.bootcss.com/underscore.js/1.8.3/underscore-min",//后面一定不要加.js
        'haha':'haha'
    },
    shim: {
　　　　'jquery': {
　　　　　　//deps: ['jquery'],//依赖库
　　　　　　exports: '$' //高版本的jquery.js无需设置shim,疑问：这里把$换成别的就报错，为什么？
　　　　}
      }
});


require(['test'],function(t){
	//t.hi();
	console.log(t.a)
})

require(['jquery'],function($){
	console.log($("title").text())
})

require(['underscore'],function(b){
	console.log(b)
})

require(['haha'],function(){
	//console.log(h)//undefined
	//haha.a();//可能这样直接用
})

//haha.a(); //报错
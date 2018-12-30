
angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  $scope.tasks=[
    {title:'哈哈哈'},
    {title:"呵呵呵"},
    {title:"哈哈哈"},
    {title:"hihihhi"}
  ];

//创建并载入模型
 $ionicModal.fromTemplateUrl("new-task.html",function(modal){
    $scope.taskModal=modal;
 },{
    scope:$scope,
    animate:'slide-in-up'
 });

 //表单提交时调用
 $scope.createTask=function(task){
    $scope.tasks.push({title:task.title});
    $scope.taskModal.hide();
    task.title="";
 };

 //打开 新增的模型
 $scope.newTask=function(){
    $scope.taskModal.show();
 };

 //关闭新增的模型
 $scope.closeNewTask=function(){
    $scope.taskModal.hide();
 };









});

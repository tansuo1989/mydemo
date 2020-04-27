angular.module('ionicApp', ['ionic'])

.factory("Projects",function(){
  return{
  	all:function(){
  		var projectString=window.localStorage['projects'];
  		if(projectString){
  			return angular.fromJson(projectString);
  		}
  		return [];//返回空数组做什么？
  	},
  	save:function(projects){
  		window.localStorage['projects']=angular.toJson(projects);
  	},
  	newProject:function(projectTitle){
  		return{
  			title:projectTitle,
  			tasks:[]
  		};
  	},
    getLastActiveIndex:function(){
    	return parseInt(window.localStorage['lastActiveProject'])||0;
    },
    setLastActiveIndex:function(index){
    	window.localStorage['lastActiveProject']=index;
    }
  }
})

//那么多参数，各个代表什么？
.controller('MyCtrl',function($scope,$timeout,$ionicModal,Projects,$ionicSideMenuDelegate){
   var createProject=function(projectTitle){
   	 var newProject=Projects.newProject(projectTitle);
   	 $scope.projects.push(newProject);
   	 Projects.save($scope.projects);
     $scope.selectProject(newProject,$scope.projects.length-1); 
   }
    // 上一行应该要添加分号
   $scope.projects=Projects.all();//all方法在哪里定义的？？

   $scope.avtiveProject=$scope.projects[Projects.getLastActiveIndex()];

   $scope.newProject=function(){
   	 var projectTitle=prompt("请写下新项目名称");
   	 if(projectTitle){
   	 	createProject(projectTitle);
   	 }
   };

   $scope.selectProject=function(project,index){
   	 $scope.activeProject=project;
   	 Projects.setLastActiveIndex(index);
   	 $ionicSideMenuDelegate.toggleLeft(false);
   };

   $ionicModal.fromTemplateUrl("new-task.html",function(modal){
   	$scope.taskModal=modal;
   },{
   	scope:$scope
   });

   
   $scope.createTask=function(task){
   	  //alert($scope.activeProject);

   	if(!$scope.activeProject||!task){return;}
   	$scope.activeProject.tasks.push({title:task.title});
     $scope.taskModal.hide();

     Projects.save($scope.projects);

     task.title="";
   };


   $scope.newTask=function(){
   	$scope.taskModal.show();
   };

   $scope.closeNewTask=function(){
   	$scope.taskModal.hide();
   };

   $scope.toggleProjects=function(){
   	$ionicSideMenuDelegate.toggleLeft();
   };

   $timeout(function(){
   	if($scope.projects.length==0){
   		while(true){
   			var projectTitle=prompt("Your first project title:");
   			if(projectTitle){
   				createProject(projectTitle);
   				break;
   			}
   		}
   	}
   });



});
var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
   // $urlRouterProvider.otherwise("/index.html");
   $stateProvider
    .state('description', {
            url: '/:brand',

            views: {
            	 '': {
      templateUrl: 'description.html',
      controller: 'myCtrl'

    },
            
    }       
      
    }).state('back',{
	// for loading home page again	
    });
    });
myApp.controller('myCtrl',function($scope,$state,$stateParams,$http){
	var para=$stateParams.brand;
	console.log(para);
	$http.get('assets/data.json').success( function(response) {
    console.log(response.mobile_brands);
    angular.forEach(response.mobile_brands,function(value,key){
    	console.log(value);
    	if(value.name===para){
    		$scope.bname=value.name;
    		$scope.img=value.url;
    		$scope.desc=value.description;
    	}
    });
    }); 
  
    });
// angular.module('myApp', [])
// .controller('myCtrl2', ['$scope', function($scope) {
//     $scope.back = function() {
//     	$location.path('/index.html');
//     };
// }]);
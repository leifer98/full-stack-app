var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        
        template: 'Building'
    })
    .when('/login',{
        
        templateUrl: 'login.html'
    })
    .when('/users',{
        
        templateUrl: 'users.html'
    })
    .when('/dashboard',{
        resolve: {
            "check": function($location, $rootScope) {
                if(!$rootScope.loggedIn) {
                    alert('Nice Try!');
                    $location.path('/');
                }
            }
        },
        templateUrl: 'dashboard.html'
    })
    
    .otherwise({
        redirectTo: '/'
    });
    
});

app.controller('loginCtrl',function($scope, $location,$rootScope) {
    $scope.submit = function () {
        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        } else {
            alert('Wrong Stuff');
        }            
    }
});

app.controller('data',function($scope) {
    $scope.title = title;
    $scope.users = JSON.parse(users.replace(/&#34;/g,'"'));
//    console.log($scope.users);
//    console.log($scope.title);
});



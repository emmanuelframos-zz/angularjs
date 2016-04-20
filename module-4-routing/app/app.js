(function (){
    angular.module('customers', ['ngRoute']);
    
    angular.module('customers').config(function($routeProvider, $locationProvider){
       $routeProvider. 
            when('/', {
               controller:'CustomerController',
               templateUrl:'app/view/customer.html'
            }); 
    });
}());
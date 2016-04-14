  /* IIFE - Immediately Invoked Function Expression 
  
  Any variable or function declared external to a function becomes part of the global namespace of the application. 
  This can be a problem, especially as the application gets larger.

  One way to mitigate this problem is to use an Immediately Invoked Function Expression or IIFE (pronounced “iffy”). 
  
  The idea of an IIFE is that if variables and functions are declared within a function, then the variables and functions 
  are local to that function and not part of the global namespace.
  
  You can use an IIFE to minimize pollution of your global namespace. */
  
  (function() {
      
        var CustomersController = function ($scope) {  
                $scope.sortBy='name';
                $scope.reverse=false;
                            
                $scope.customers = [{name:'John', age:20, city:'New York', salary:2000.67,   birthDate:'1996-01-31'},
                                    {name:'Aron', age:30, city:'Miami',    salary:2400.34,   birthDate:'1986-08-29'},
                                    {name:'Zac',  age:40, city:'San Francisco', salary:3000, birthDate:'1976-12-27'}];  
                            
                $scope.doSort = function(propertyName){
                    $scope.sortBy=propertyName;
                    $scope.reverse=!$scope.reverse;
                };      
        };        
        
        angular.module('customersApp').controller('CustomersController', CustomersController);
  }());
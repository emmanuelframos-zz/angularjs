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
        
        CustomersController.$inject = ['$scope'];
        
        angular.module('customersApp').controller('customersController', CustomersController);
  }());
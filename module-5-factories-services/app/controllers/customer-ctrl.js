  /* IIFE - Immediately Invoked Function Expression 
  
  Any variable or function declared external to a function becomes part of the global namespace of the application. 
  This can be a problem, especially as the application gets larger.

  One way to mitigate this problem is to use an Immediately Invoked Function Expression or IIFE (pronounced “iffy”). 
  
  The idea of an IIFE is that if variables and functions are declared within a function, then the variables and functions 
  are local to that function and not part of the global namespace.
  
  You can use an IIFE to minimize pollution of your global namespace. */
  
  (function() {
      
        var CustomersController = function ($scope, $log, customersFactory, locationService, appSettings) {  
                var vm = this;
                
                $scope.sortBy='name';
                $scope.reverse=false;
                                            
                $scope.customers = customersFactory.getCustomers();  
                            
                $scope.doSort = function(propertyName){
                    $scope.sortBy=propertyName;
                    $scope.reverse=!$scope.reverse;
                };
                
                $scope.appSettings = appSettings;
                
                locationService.getLocation('201.29.4.5')
                  .success(function(location){
                    $scope.location = location;
                    $log.log('Success');
                })
                  .error(function(data, status, header, config){
                    $log.log('Error on request.')                   
                });               
        };
        
        angular.module('customersApp').controller('CustomersController', CustomersController);
  }());
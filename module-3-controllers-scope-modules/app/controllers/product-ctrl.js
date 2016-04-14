angular.module('customersApp').controller('ProductController', function ($scope){
    $scope.products = [{description:'XBox One', price:1200},{description:'PS3', price:500},{description:'Air Frier', price:300}];   
});
(function(){
    var app = angular.module('angular-directives',[]);
    
    app.directive('helloWorld', function(){
        return {
            template : 'Hello World'
              
        };
    });
    
    app.directive('myName', function(name){
        return {
            link : 'My Name is ' + name
              
        };
    });
})();
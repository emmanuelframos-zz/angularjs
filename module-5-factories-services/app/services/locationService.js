 /* When you’re using Service, Angular instantiates it behind the scenes with the ‘new’ keyword. 
    
    Because of that, you’ll add properties to ‘this’ and the service will return ‘this’. 
    
    When you pass the service into your controller, those properties on ‘this’ will now be available on that controller through your service.
*/

angular.module('customersApp').service('locationService', function($http){
    var vm = this;
    
    vm.getLocation = function(ip){
        return $http.get('http://geo.groupkt.com/ip/'+ ip + '/json');
    } 
});
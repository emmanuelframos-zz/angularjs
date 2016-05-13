/*  When you’re using a Factory you create an object, add properties to it, then return that same object. 
    
    When you pass this factory into your controller, 
    those properties on the object will now be available in that controller through your factory.
 */

angular.module('customersApp').factory('customersFactory', function (locationService){
    var factory = {};
    
    factory.getCustomers = function(){
            return [{name:'John', age:20, city:'New York', salary:2000.67,   birthDate:'1996-01-31'},
                                    {name:'Aron', age:30, city:'Miami',    salary:2400.34,   birthDate:'1986-08-29'},
                                    {name:'Zac',  age:40, city:'San Francisco', salary:3000, birthDate:'1976-12-27'}];
    }  
    
    return factory;                        
});
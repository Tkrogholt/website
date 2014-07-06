var loginServer = angular.module('loginServer',[
    'ngRoute',
    'appControllers',
    'appFilters'
]);

loginServer.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/customers', {
        templateUrl: 'js/partials/customerlist.html',
        controller: 'customerListController'
      }).
      when('/customers/:customerId', {
        templateUrl: 'js/partials/customerdetails.html',
        controller: 'customerDetailsController'
      }).
      otherwise({
        redirectTo: '/customers'
      });
  }]);


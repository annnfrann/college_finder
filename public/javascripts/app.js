var app = angular.module("college_finder", ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/anna.html',
        controller: 'annaController'
      })
      .when('/anna', {
        templateUrl: 'views/anna.html',
        controller: 'collegeController'
      })
});

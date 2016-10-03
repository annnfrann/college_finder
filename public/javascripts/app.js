var app = angular.module("college_finder", ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'annaController'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'annaController'
      })
      .when('/studentinfo', {
        // add in an if to handle whether or not someone is signed in
        templateUrl: 'views/demographics.html',
        controller: 'annaController'
      })
      .when('/sport', {
        templateUrl: 'views/sport.html',
        controller: 'annaController'
      })
      .when('/division', {
        templateUrl: 'views/division.html',
        controller: 'annaController'
      })
      .when('/enrollment', {
        templateUrl: 'views/enrollment.html',
        controller: 'collegeController'
      })
      .when('/admissions', {
        templateUrl: 'views/admissions.html',
        controller: 'collegeController'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'collegeController'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'collegeController'
      })
      .when('/colleges', {
        templateUrl: 'views/anna.html',
        controller: 'collegeController'
      })
});

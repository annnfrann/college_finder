var app = angular.module("college_finder", ['ngRoute', 'angular.filter'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'annaController'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'signupController'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'signinConroller'
      })
      .when('/studentinfo', {
        // add in an if to handle whether or not someone is signed in
        templateUrl: 'views/demographics.html',
        controller: 'studentController'
      })
      .when('/sport', {
        templateUrl: 'views/sport.html',
        controller: 'sportController'
      })
      .when('/division', {
        templateUrl: 'views/division.html',
        controller: 'divisionController'
      })
      .when('/enrollment', {
        templateUrl: 'views/enrollment.html',
        controller: 'enrollmentController'
      })
      .when('/admissions', {
        templateUrl: 'views/admissions.html',
        controller: 'admissionsController'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'locationController'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'resultsController'
      })
      .when('/colleges', {
        templateUrl: 'views/anna.html',
        controller: 'collegeController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'collegeController'
      })
});

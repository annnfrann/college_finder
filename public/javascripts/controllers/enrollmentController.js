app.controller('enrollmentController', function($scope, colleges_service){
  $scope.view = {}
  $scope.view.lowerEnrollment = ''
  $scope.view.upperEnrollment = ''

  $scope.getEnrollment = function(lower, upper){
    colleges_service.studentParameters.lowerEnrollment = lower
    colleges_service.studentParameters.upperEnrollment = upper
  }

})

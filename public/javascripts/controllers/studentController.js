app.controller('studentController', function($scope, colleges_service){
  $scope.view = {}
  $scope.view.gender = ''
  $scope.getGender = function(input) {
    colleges_service.studentParameters.gender = input
  }
})

app.controller('divisionController', function($scope, colleges_service){
  $scope.view = {}

  colleges_service.getDivision(colleges_service.studentParameters.gender, colleges_service.studentParameters.sportName).then(function(divisions){
    $scope.view.divisions = divisions.data
  })
  $scope.view.chosenDivision = ''
  $scope.getDivision = function(input){
    colleges_service.studentParameters.sportId = input
  }
})

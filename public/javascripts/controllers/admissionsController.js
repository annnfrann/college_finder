app.controller('admissionsController', function($scope, colleges_service){
  $scope.view = {}

  colleges_service.getSelectivity(colleges_service.studentParameters.lowerEnrollment, colleges_service.studentParameters.upperEnrollment, colleges_service.studentParameters.sportId).then(function(selectivity){
    $scope.view.selectivities = selectivity.data
  })

  $scope.getSelectivity = function(selectivity){
    colleges_service.studentParameters.selectivity = selectivity
  }
})

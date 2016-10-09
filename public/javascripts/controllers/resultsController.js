app.controller('resultsController', function($scope, colleges_service){
  $scope.view = {}

  colleges_service.getResults(colleges_service.studentParameters.lowerEnrollment, colleges_service.studentParameters.upperEnrollment, colleges_service.studentParameters.sportId, colleges_service.studentParameters.selectivity, colleges_service.studentParameters.state).then(function(results){
    console.log(results);
    $scope.view.results = results.data
  })

})

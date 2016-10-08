app.controller('sportController', function($scope, colleges_service){
  $scope.view = {}
  colleges_service.getSports(colleges_service.studentParameters.gender).then(function(sports){
    $scope.view.sports = sports.data
  })
})

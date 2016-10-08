app.controller('sportController', function($scope, colleges_service){
  $scope.view = {}
  colleges_service.getSports(colleges_service.studentParameters.gender).then(function(sports){
    $scope.view.sports = sports.data
  })
  $scope.view.sport = ''
  $scope.getSport = function(input){
    colleges_service.studentParameters.sportName = input
  }
})

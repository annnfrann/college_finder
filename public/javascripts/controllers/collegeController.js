app.controller('collegeController', function($scope, colleges_service){
  $scope.view = {}
  $scope.view.thing = 'thing'

  colleges_service.all().then(function(response){
    $scope.view.anna = response.data.rows
  })
  colleges_service.names().then(function(collegeNames){
    $scope.view.names = collegeNames.data.rows
  })
  colleges_service.mensSports().then(function(mensSports){
    $scope.view.dudes = mensSports.data
  })
})

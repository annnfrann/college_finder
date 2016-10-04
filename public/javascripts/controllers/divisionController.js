app.controller('divisionController', function($scope, colleges_service){
  $scope.view = {}

  colleges_service.division().then(function(division){
    $scope.view.division = division.data.rows
  })
})

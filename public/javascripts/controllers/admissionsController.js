app.controller('admissionsController', function($scope, colleges_service){
  $scope.view = {}

  colleges_service.admissions().then(function(admissions){
    $scope.view.admissions = admissions.data.rows
  })
})

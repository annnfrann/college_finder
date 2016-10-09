app.controller('locationController', function($scope, colleges_service){
  $scope.view = {}

  colleges_service.getLocation(colleges_service.studentParameters.lowerEnrollment, colleges_service.studentParameters.upperEnrollment, colleges_service.studentParameters.sportId, colleges_service.studentParameters.selectivity).then(function(locations){
    $scope.view.locations = locations.data
  })

  $scope.getLocation = function(location){
    // could eventually do a thing where colleges_service.studentParameters.state is an array, and you just push the values into it
    colleges_service.studentParameters.state = location
  }

})

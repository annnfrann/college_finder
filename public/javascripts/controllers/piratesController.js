app.controller('piratesController', function ($scope, pirates_service) {
    $scope.view = {}
    $scope.view.thing = 'thing'
    pirates_service.all().then(function(response){
      $scope.view.anna = response.data.rows
    })
})

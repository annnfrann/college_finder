app.controller('signoutController', function($scope, colleges_service){
  $scope.view = {}

  $scope.view.usersEmail = ""
  $scope.view.userPass1 = ""

  $scope.signout = function(email, password){
    colleges_service.signOut(email, password)
  }
})

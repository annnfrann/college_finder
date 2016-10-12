app.controller('signupController', function($scope, colleges_service){
  $scope.view = {}

  $scope.view.usersEmail = ""
  $scope.view.userPass1 = ""

  $scope.signup = function(email, password){
    colleges_service.signUp(email, password)
  }
})

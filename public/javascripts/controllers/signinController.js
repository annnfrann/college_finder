app.controller('signinController', function($scope, colleges_service){
  $scope.view = {}

  $scope.view.usersEmail = ""
  $scope.view.userPass1 = ""

  $scope.signin = function(email, password){
    colleges_service.signIn(email, password)
  }
})

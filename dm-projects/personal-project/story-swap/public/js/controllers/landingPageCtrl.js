angular.module('storySwap').controller('landingPageCtrl', function($scope, service){
  $scope.test = "Welcome to Story Swap!"

  $scope.form = false;
  $scope.startButton = true;

  $scope.begin = function(){
    $scope.form = true
    $scope.startButton = false
  }

  $scope.create = function(eamil, password, year){
    var login = {
      email: $scope.email,
      password: $scope.password,
      yearBorn: $scope.year
    }
    service.createUser(login)
    console.log('creating');
  }
})

angular.module('storySwap').controller('landingPageCtrl', function($scope, service){
  $scope.test = "Welcome to Story Swap!"

  $scope.form = false;
  $scope.start = false;
  $scope.startButton = true;
  $scope.logIn = true;


  $scope.begin = function(){
    $scope.form = true
    $scope.startButton = false
    $scope.logIn = false
  }

})

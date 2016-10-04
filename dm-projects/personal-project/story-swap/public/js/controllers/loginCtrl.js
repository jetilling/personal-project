angular.module('storySwap').controller('loginCtrl', function($scope, service, $state){
  $scope.test = "Welcome back"



  $scope.loginLocal = function(email, password) {
    console.log('Logging in with', email, password);
    service.loginLocal({
      email: email,
      password: password
    })
    .then(function(res) {
      console.log(res);
      if(res) $state.go('dashboard')
    })
  }
})

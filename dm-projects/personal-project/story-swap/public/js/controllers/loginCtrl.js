angular.module('storySwap').controller('loginCtrl', function($scope, service, $state, $auth){
  $scope.test = "Welcome back"


  // login w/sessions
  // $scope.loginLocal = function(email, password) {
  //   console.log('Logging in with', email, password);
  //   service.loginLocal({
  //     email: email,
  //     password: password
  //   })
  //   .then(function(res) {
  //     console.log(res);
  //     if(res) $state.go('dashboard')
  //   })
  // }

//login w/jsonwebtokens
    $scope.login = function(email, password) {
      console.log(email, password);
      $auth.login({
        email: email,
        password: password,
      }).then(function (response) {
        console.log("signUpCtrl:", response);
        if(response.status === 200){
          $auth.setToken(response)
          $state.go('dashboard');
        }
      }).catch(function (response) {
        console.log("signUpCtrl Error:", response);
        // window.alert('Error: Register failed');
      });
    };
})

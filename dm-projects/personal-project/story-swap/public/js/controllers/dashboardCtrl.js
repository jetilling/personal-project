angular.module('storySwap').controller('dashboardCtrl', function($scope, service, $state, $auth){
  $scope.test = "Story Swap"

  $scope.menu = true;
  $scope.close = false;

$scope.showMenu = function(){
  angular.element(document).find('.dashTitle').css("left", "-80%")
  angular.element(document).find('.mobile-nav').css("top", "2.5%")
  $scope.menu = false;
  $scope.close = true;
}

$scope.closeMenu = function(){
  angular.element(document).find('.dashTitle').css("left", "0%")
  angular.element(document).find('.mobile-nav').css("top", "-5%")
  $scope.menu = true;
  $scope.close = false;
}


// angular.element(document).find('.storiesBtn').css("border-left", "3px solid black", "border-right", "3px solid black", "border-top", "3px solid black")
// $auth.get(req.user)
$scope.logout = function(){
  $auth.logout()
      .then(function() {
        console.log('You have been logged out');
        $state.go('logout');
  });
}

  //  $scope.isAuthenticated();
  // $scope.user = service.getUser()

  service.getUserId()
    .then(function(res) {
      if (res) {
        service.getDisplayName(res)
        .then(function(response){
                  // console.log('scope.user res:', response);
          var result = response.data;
          $scope.user = result[0].display_name
        })
      }
      else   $scope.user = 'NOT LOGGED IN';
    })

 var currentUserId;
  service.getUserId()
    .then(function(res) {
      if (res) var currentUser = res;
        // console.log("inside .then", currentUser);
      currentUserId = currentUser
    })





  // $scope.logout = function(){
  //   service.logout()
  //   .then(function(res) {
  //     if(res) $state.go('logout')
  //   })
  // }


})

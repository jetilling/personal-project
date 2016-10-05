angular.module('storySwap').controller('dashboardCtrl', function($scope, service, $state, $auth){
  $scope.test = "Story Swap"

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

// $scope.user = service.getUser()
//     .then(function(res) {
//       if (res) {
//         var result = res[0];
//         $scope.user = result.display_name
//       }
//       else   $scope.user = 'NOT LOGGED IN';
//     })

 var currentUserId;
  service.getUser()
    .then(function(res) {
      if (res) var currentUser = res;
        console.log("inside .then", currentUser);
      currentUserId = currentUser
    })

console.log(currentUserId);

  $scope.message = false;
  $scope.compose = function(){
    $scope.message = !$scope.message
  }

  $scope.addStory = function(story){
    var complete = true
    service.add(story, currentUserId, complete)
    $scope.story = ''
  }

  // $scope.addstory = function(story){
  //   $scope.emit('story', story)
  // }

  $scope.saveDraft = function(story){
    var complete = false
    service.add(story, currentUserId, complete)
    $scope.story = ''
  }

  // $scope.logout = function(){
  //   service.logout()
  //   .then(function(res) {
  //     if(res) $state.go('logout')
  //   })
  // }


})

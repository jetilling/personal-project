angular.module('storySwap').controller('dashboardCtrl', function($scope, service){
  $scope.test = "Story Swap"

  // $scope.user = service.getUser()

$scope.user = service.getUser()
    .then(function(res) {
      if (res) {
        var result = res[0];
        $scope.user = result.display_name
      }
      else   $scope.user = 'NOT LOGGED IN';
    })

 var currentUserId;
  service.getUser()
    .then(function(res) {
      if (res) var currentUser = res[0].id;
        console.log("inside .then", currentUser);
      currentUserId = currentUser

    })

console.log(currentUserId);
  // getUser();

  $scope.message = false;
  $scope.compose = function(){
    $scope.message = !$scope.message
  }

  $scope.addStory = function(story){
    // console.log(story, currentUserId);
    service.add(story, currentUserId)
    $scope.story = ''
  }

  $scope.saveDraft = function(story){
    service.save(story)
    $scope.story = ''
  }



})

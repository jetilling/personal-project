angular.module('storySwap').controller('composeCtrl', function($scope, service){

  var currentUserId;
   service.getUserId()
     .then(function(res) {
       if (res) var currentUser = res;
         // console.log("inside .then", currentUser);
       currentUserId = currentUser
     })

  $scope.addStory = function(story){
    console.log(story);
    var complete = true
    // service.add(story, currentUserId, complete)
    $scope.story = ''
  }

  $scope.saveDraft = function(story){
    console.log(story);
    var complete = false
    service.add(story, currentUserId, complete)
    $scope.story = ''
  }


})

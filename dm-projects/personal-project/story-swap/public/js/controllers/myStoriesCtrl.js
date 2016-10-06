angular.module('storySwap').controller('myStoriesCtrl', function($scope, service){
  $scope.test = 'this page shows your posted stories'

  var currentUserId;
  service.getUserId()
    .then(function(res) {
      if (res) currentUserId = res;
      $scope.myStories = service.getMyStories(currentUserId)
          .then(function(response){
          if(response) $scope.myStories = response.data;
      })
  })

  $scope.remove = function(id){
    console.log(id);
    service.removeFromDash(id)
  }
})

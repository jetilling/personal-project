angular.module('storySwap').controller('myStoriesCtrl', function($scope, service){
  $scope.test = 'this page shows your posted stories'

var myStories = [];

  var currentUserId;
  service.getUserId()
    .then(function(res) {
      if (res) currentUserId = res;
       service.getMyStories(currentUserId)
          .then(function(response){
          if(response) result = response.data;
          result.forEach(function(item){
            myStories.push(item)
          })
      })
  })

  $scope.myStories = myStories;

  $scope.remove = function(id){
    service.removeFromDash(id)
    .then(function(response){
      if(response){
        var index = -1;
          // Find the element in the array
          for (var i = 0; i < myStories.length; i++) {
              if (myStories[i].id === id) {
                  index = i;
                  break;
              }
          }
          // Remove the element
          if (index !== -1) {
              myStories.splice(index,1);
          }

      }
    })
  }

})

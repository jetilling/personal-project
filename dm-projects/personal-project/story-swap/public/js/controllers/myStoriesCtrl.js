angular.module('storySwap').controller('myStoriesCtrl', function($scope, service){
  $scope.test = 'this page shows your posted stories and saved stories'

  $scope.storiesByMe = true;
  $scope.stories = false;

  $scope.viewSavedStories = function(){
    $scope.stories = true;
    $scope.storiesByMe = false;
    angular.element(document).find('.myStories-savedStories-btn').css("background", "#E8FFF5");
    angular.element(document).find('.myStories-btn').css("background", "transparent")
  }

  $scope.viewMyStories = function(){
    $scope.stories = false;
    $scope.storiesByMe = true;
    angular.element(document).find('.myStories-savedStories-btn').css("background", "transparent");
    angular.element(document).find('.myStories-btn').css("background", "#E8FFF5")
  }

var myStories = [];
var savedStories = [];

//get current use Id
  var currentUserId;
   service.getUserId()
     .then(function(res) {
        if (res) currentUserId = res;
          $scope.user = currentUserId
        })


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

  //saved stories
  service.getUserId()
    .then(function(res) {
      if (res) {
        service.getSavedStories(res)
          .then(function(response){
            var result = response.data[0].saved_stories;
            console.log(result);
            result.forEach(function(item){
              console.log(item);
              service.getSavedStoryById(item)
                .then(function(response){
                    var result = response.data
                    console.log(result);
                  result.forEach(function(item){
                    savedStories.push(item)
                    })
                  })
                  // console.log(followingArr);
                })
              })
            }
          else console.log('idk');
        })
$scope.savedStories = savedStories
  // });

$scope.removeSavedStory = function(id, user){
    service.removeSavedStory(id, user)
    .then(function(response){
      if(response){
        var index = -1;
          // Find the element in the array
          for (var i = 0; i < savedStories.length; i++) {
              if (savedStories[i].id === id) {
                  index = i;
                  break;
              }
          }
          // Remove the element
          if (index !== -1) {
              savedStories.splice(index,1);
          }

      }
    })
}

})

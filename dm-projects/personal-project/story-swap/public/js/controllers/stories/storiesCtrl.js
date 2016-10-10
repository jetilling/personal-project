angular.module('storySwap').controller('storiesCtrl', function($scope, service, $timeout, $state){
  $scope.test = "Stories Page!"


  var followingArr = []
  var stories = []

//get current use Id
  var currentUserId;
   service.getUserId()
     .then(function(res) {
        if (res) currentUserId = res;
          $scope.user = currentUserId
        })


//get stories
   service.getStories()
        .then(function(res){
          if(res) var result = res;
          result.forEach(function(item){
            stories.push(item)
          })
        })
      $scope.stories = stories

//get users you're following
    service.getUserId()
      .then(function(res) {
        if (res) {
          service.getFollowing(res)
            .then(function(response){
              var result = response.data[0].follows;
              result.forEach(function(item){
                service.getFollowingUser(item)
                  .then(function(response){
                      var result = response.data
                    result.forEach(function(item){
                      followingArr.push(item)
                    })
                    // followingArr.push(response.data[0]);
                    // $scope.following = followingArr;
                    console.log(followingArr);
                  })
                })
              })
          }
          else console.log('idk');
    });

    $scope.following = followingArr
    console.log($scope.following);


//see stories from the user you're following
    $scope.viewStories = function(id, user){
      service.viewFollower(id, user)
      .then(function(res){
        if(res) $state.go('dashboard.following')
      })
    }

//follow User
    $scope.followUser = function(users_id, user, display_name){
      service.followUser(users_id, user)
      .then(function(res){
        if(res){
          followingArr.push({display_name: display_name, id: users_id})
        }
      })
    }

//unfollow User
    $scope.unfollowUser = function(id, user){
      service.unfollowUser(id, user)
      .then(function(res){
        if (res){
          var index = -1;
            // Find the element in the array
            for (var i = 0; i < followingArr.length; i++) {
                if (followingArr[i].id === id) {
                    index = i;
                    break;
                }
            }
            // Remove the element
            if (index !== -1) {
                followingArr.splice(index,1);
            }
        }
      })
    }


//save Story
    $scope.saveStory = function(id, user){
      service.saveStory(id, user)
    }

})

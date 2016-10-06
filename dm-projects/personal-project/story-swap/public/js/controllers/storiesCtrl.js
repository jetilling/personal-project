angular.module('storySwap').controller('storiesCtrl', function($scope, service, $timeout, $state){
  $scope.test = "Stories Page!"

  var followingArr = []




    $scope.stories = service.getStories()
        .then(function(res){
          if(res) $scope.stories = res;
        })

    service.getUserId()
      .then(function(res) {
        if (res) {
          service.getFollowing(res)
            .then(function(response){
              var result = response.data[0].follows;
              result.forEach(function(item){
                service.getFollowingUser(item)
                  .then(function(response){
                    followingArr.push(response.data[0]);
                    $scope.following = followingArr;
                  })
                })
              })
          }
          else console.log('idk');
    });

    $scope.viewStories = function(id, user){
      service.viewFollower(id, user)
      .then(function(res){
        if(res) $state.go('dashboard.following')
      })
    }

    $scope.unfollowUser = function(id, user){
      console.log(id);
      service.unfollowUser(id, user)
    }



    var currentUserId;
       service.getUserId()
         .then(function(res) {
          if (res) currentUserId = res;
            $scope.user = currentUserId
          })

    $scope.addOne = function(likeCount, id){
      console.log(likeCount, id);
      service.addToLikeCount(likeCount, id)
    }

    $scope.followUser = function(users_id, user){
      // console.log(users_id, user);
      service.followUser(users_id, user);
    }

// function repeat(){
//     $timeout(function(){
//       console.log('ran');
//       $scope.stories = service.getStories()
//           .then(function(res){
//             if(res) $scope.stories = res;
//             repeat()
//           })
//
//     }, 2000)
//   }
//
//   repeat()

// $scope.$on('new story', function(story){
//   $scope.stories = story
// })


})

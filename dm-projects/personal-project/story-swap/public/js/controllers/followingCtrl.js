angular.module('storySwap').controller('followingCtrl', function($scope, service){
  $scope.test = "Who are you following?"


//stories
  var followingArr = [];
  var newArr = []
  $scope.showAll = function(){
    followingArr = [];
    newArr = []
  service.getUserId()
    .then(function(res) {
      console.log(res);
      if (res) {
        service.getViewFollower(res)
        .then(function(response){
          console.log(response.data[0].view_follower);
          if(response.data[0].view_follower === null){
            service.getFollowing(res)
              .then(function(response){
                var result = response.data[0].follows;
                result.forEach(function(item){
                  service.getFollowingUserStory(item)
                    .then(function(response){
                      followingArr.push(response.data);
                      followingArr.forEach(function(item){
                        item.forEach(function(content){
                          if(newArr.indexOf(content) <= -1){
                          newArr.push(content)
                        }
                        })
                      })
                      $scope.following = newArr;
                    })
                  })
                })
          } else {
                  service.getFollowingUserStory(response.data[0].view_follower)
                    .then(function(response){
                      followingArr.push(response.data);
                      followingArr.forEach(function(item){
                        item.forEach(function(content){
                          if(newArr.indexOf(content) <= -1){
                          newArr.push(content)
                        }
                        })
                      })
                      $scope.following = newArr;
                    })
            var id = null;
            var user = res
            service.viewFollower(id, user)
          }
        })
      }
        else console.log('idk');
    });
  }
$scope.showAll()



//buttons
var followingBtnArr = []
service.getUserId()
  .then(function(res) {
    if (res) {
      service.getFollowing(res)
        .then(function(response){
          var result = response.data[0].follows;
          result.forEach(function(item){
            service.getFollowingUser(item)
              .then(function(response){
                followingBtnArr.push(response.data[0]);
                $scope.users = followingBtnArr;
              })
            })
          })
      }
      else console.log('idk');
});

$scope.followUser = false
var followingUserArr = [];
var newUserArr = [];
$scope.viewUserStories = function(id){
  followingUserArr = [];
  newUserArr = [];
  service.getFollowingUserStory(id)
    .then(function(response){
      followingUserArr.push(response.data);
      followingUserArr.forEach(function(item){
        item.forEach(function(content){
          if(newUserArr.indexOf(content) <= -1){
          newUserArr.push(content)
        }
        })
      })
      $scope.following = newUserArr;
    })
    $scope.followUser = true;
}





})

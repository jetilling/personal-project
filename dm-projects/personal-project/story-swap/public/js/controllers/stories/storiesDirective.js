angular.module('storySwap').directive('storiesDirective', function(){
  return {
    restrict: 'AE',
    templateUrl: './views/directives/storiesDirective.html',

    controller: function($scope, service, $timeout){
      $scope.likeBtn = true
      $scope.followBtn = true


//can't follow yourself
      service.getUserId()
        .then(function(res) {
           if (res) currentUserId = res;
             $scope.user = currentUserId
               if ($scope.user === $scope.story.users_id) $scope.followBtn = false;
             })

//can't double follow others
var followingArr = []

//on refresh loads all users your following and hides their follow button.
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
                followingArr.forEach(function(item){
                  if (item.id === $scope.story.users_id) {$scope.followBtn = false; console.log('fired');}

                })
                // console.log(followingArr);
              })
            })
          })
      }
      else console.log('idk');
});

//on follow click, loads all people a user is following and hides their follow btn.
$scope.getFollowing = function(){
  $scope.followBtn = true
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
                followingArr.forEach(function(item){
                  if (item.id === $scope.story.users_id) {$scope.followBtn = false; console.log('fired');}
                  else {$scope.followBtn = true}

                })
                // console.log(followingArr);
              })
            })
          })
      }
      else console.log('idk');
});
}


// following.push($scope.following)
// following.map(function(x){
//   // console.log(x.id);
//   return x.id
// })

// console.log(following[0]);
// console.log('following',following);

// console.log('new following', following);


//like stories
      $scope.addOne = function(likeCount, id){
        console.log(likeCount, id);
        service.addToLikeCount(likeCount, id)
          .then(function(res){
            if(res){
              $scope.stories.forEach(function(item){
                if(item.id === id){
                  item.like_count++
                  $scope.likeBtn = false
                }
              })
            }
          })
      }
    }
  }

})

angular.module('storySwap').directive('storiesDirective', function(){
  return {
    restrict: 'AE',
    templateUrl: './views/directives/storiesDirective.html',

    controller: function($scope, service){
        // var stories = []
      $scope.likeBtn = true
      $scope.followBtn = true

      console.log($scope.followingArr);

//can't follow yourself
      service.getUserId()
        .then(function(res) {
           if (res) currentUserId = res;
             $scope.user = currentUserId
               if ($scope.user === $scope.story.users_id) $scope.followBtn = false;
             })

//can't double follow others - maybe copy following arr/function into here and use it that way.
      // if ($scope.followingArr.indexOf($scope.story.users_id) <= -1){
      //   $scope.followBtn = false;
      // }


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

angular.module('storySwap').directive('storiesDirective', function(){
  return {
    restrict: 'AE',
    templateUrl: './views/directives/storiesDirective.html',
    // scope: {
    //   story: '='
    // },
    controller: function($scope, service){
        // var stories = []
      $scope.likeBtn = true
      $scope.followBtn = true

      service.getUserId()
        .then(function(res) {
           if (res) currentUserId = res;
             $scope.user = currentUserId
             console.log($scope.story.users_id);
               if ($scope.user === $scope.story.users_id) {$scope.followBtn = false; console.log('fired');}
             })


    //
    // //get stories
    //    service.getStories()
    //         .then(function(res){
    //           console.log(res);
    //           if(res) var result = res;
    //           result.forEach(function(item){
    //             stories.push(item)
    //           })
    //         })
    //     $scope.stories = stories

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

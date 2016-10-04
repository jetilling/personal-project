angular.module('storySwap').controller('storiesCtrl', function($scope, service){
  $scope.test = "Stories Page!"

    $scope.stories = service.getStories()
        .then(function(res){
          if(res) $scope.stories = res;
        })

    $scope.addOne = function(likeCount, id){
      console.log(likeCount, id);
      service.addToLikeCount(likeCount, id)
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

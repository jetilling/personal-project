angular.module('storySwap').controller('storiesCtrl', function($scope, service){
  $scope.test = "Stories Page!"

    $scope.stories = service.getStories()
      .then(function(res){
        if(res) $scope.stories = res;
      })
  }


})

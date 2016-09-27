angular.module('storySwap').controller('dashboardCtrl', function($scope, service){
  $scope.test = "Story Swap"

  $scope.user = service.getUser()

  $scope.message = false;
  $scope.compose = function(){
    $scope.message = !$scope.message
  }

  $scope.addStory = function(story){
    service.add(story)
    console.log('adding')

    $scope.story = ''
  }

  $scope.saveDraft = function(story){
    service.save(story)
    console.log('saving');

    $scope.story = ''
  }



})

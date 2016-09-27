angular.module('storySwap').controller('draftsCtrl', function($scope, service){
  $scope.test = "Finish those uncompleted stories!"

  $scope.drafts = service.getDrafts();
  //
  // $scope.textArea = false;
  // $scope.publishButton = false;
  // $scope.draft = true;
  // $scope.continueButton = true;
  //
  //
  // $scope.continue = function(){
  //   $scope.textArea = true;
  //   $scope.publishButton = true;
  //   $scope.draft = false;
  //   $scope.continueButton = false;
  // }
  //
  // $scope.publish = function(updatedDraft){
  //   service.publish(updatedDraft)
  //   console.log('publishing');
  //   // service.delete(updatedDraft)
  // }
})

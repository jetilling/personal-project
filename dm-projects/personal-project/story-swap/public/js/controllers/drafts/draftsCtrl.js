angular.module('storySwap').controller('draftsCtrl', function($scope, service){
  $scope.test = "Finish drafts here"

  // $scope.drafts = service.getDrafts();
  //
  var currentUserId;
  service.getUserId()
    .then(function(res) {
      if (res) currentUserId = res;
        $scope.drafts = service.getDrafts(currentUserId)
            .then(function(response){
              if(response) $scope.drafts = response.data;
            })
  })


  // console.log(currentUserId);

  // $scope.drafts = service.getDrafts(currentUserId)
  //     .then(function(res){
  //       // console.log('inside ctrl promise');
  //       //       console.log(res);
  //       if(res) $scope.drafts = res;
  //     })




})

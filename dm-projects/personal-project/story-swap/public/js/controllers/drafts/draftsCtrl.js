angular.module('storySwap').controller('draftsCtrl', function($scope, service){
  $scope.test = "Finish drafts here"

  // $scope.drafts = service.getDrafts();
  //
  var currentUserId;
  service.getUser()
    .then(function(res) {
      if (res) currentUserId = res[0].id;
        // console.log("drafts", currentUserId);
        // currentUserId = currentUser
        $scope.drafts = service.getDrafts(currentUserId)
            .then(function(response){
              // console.log('inside ctrl promise');
                    // console.log(response);

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

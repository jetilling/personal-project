angular.module('storySwap').controller('draftsCtrl', function($scope, service){
  $scope.test = "Finish drafts here"

$scope.publishBtn = true
$scope.hidePublishBtn = function(){
  $scope.publishBtn = false
}
$scope.showPublishBtn = function(){
  $scope.publishBtn = true
}

  var drafts = []

  var currentUserId;
  service.getUserId()
    .then(function(res) {
      if (res) currentUserId = res;
        service.getDrafts(currentUserId)
            .then(function(response){
              console.log(response.data);
              if(response) result = response.data;
              result.forEach(function(item){
                drafts.push(item)
              })
      })
  })

$scope.drafts = drafts

$scope.publish = function(id){
  var complete = true;
  // service.publishdraft(id, complete)
  // .then(function(res){
    console.log(res);
    if(res.data){
      var index = -1;
        // Find the element in the array
        for (var i = 0; i <drafts.length; i++) {
            if (drafts[i].id === id) {
                index = i;
                break;
            }
        }
        // Remove the element
        if (index !== -1) {
            drafts.splice(index,1);
        }
  //   }
  // })
}

$scope.update = function(draft){
  service.update(draft)
}

$scope.remove = function(id) {
  console.log(id);
  service.remove(id)
  .then(function(res){
    if(res){
      var index = -1;
        // Find the element in the array
        for (var i = 0; i <drafts.length; i++) {
            if (drafts[i].id === id) {
                index = i;
                break;
            }
        }
        // Remove the element
        if (index !== -1) {
            drafts.splice(index,1);
        }
    }
  })
}



$scope.updateDraft = function(data, id){
  console.log(data);
  service.updateDraft(data, id)
}





})

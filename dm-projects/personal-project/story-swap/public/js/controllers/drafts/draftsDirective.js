angular.module('storySwap').directive('draftsDirective', function(){

  return {
    restrict: 'AE',
    templateUrl: './views/directives/draftsDirective.html',
    scope: {
      draft: '='
    },
    controller: function($scope, service){


      $scope.textArea = false;
      $scope.publishButton = false;
      $scope.saveButton = false;
      $scope.continueButton = true;


      $scope.continue = function(){
        $scope.textArea = true;
        $scope.publishButton = true;
        $scope.saveButton = true;
        $scope.continueButton = false;
      }

      $scope.publish = function(draft, index){
        service.publish(draft)
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
              for (var i = 0; i < $scope.drafts.length; i++) {
                  if ($scope.drafts[i].id === id) {
                      index = i;
                      break;
                  }
              }
              // Remove the element
              if (index !== -1) {
                  $scope.drafts.splice(index,1);
              }
          }
        })
      }



      $scope.save = function(draft){
        service.save(draft)
      }

    },
    link: function(scope, element, attrs){

    }
  }





})

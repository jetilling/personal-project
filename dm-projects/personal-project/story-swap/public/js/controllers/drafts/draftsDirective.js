angular.module('storySwap').directive('draftsDirective', function(){

  return {
    restrict: 'AE',
    templateUrl: './views/directives/draftsDirective.html',
    scope: {
      draft: '='
    },
    controller: function($scope, service){
      $scope.drafts = service.getDrafts();


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

      $scope.remove = function (draft) {
        service.remove(draft)
      }



      $scope.save = function(draft){
        service.save(draft)
      }

    },
    link: function(scope, element, attrs){

    }
  }





})

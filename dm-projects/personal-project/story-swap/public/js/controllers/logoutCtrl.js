angular.module('storySwap').controller('logoutCtrl', function($scope){
  $scope.disappear = function(){
    angular.element(document).find(".logout-nav").css("top", "-50%")
  }
  $scope.appear = function(){
    angular.element(document).find(".logout-nav").css("top", "-38.5%")
  }
})

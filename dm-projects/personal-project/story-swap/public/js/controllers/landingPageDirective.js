angular.module('storySwap').directive('landingPageDirective', function(){
  return {
    restrict: 'AE',
    templateUrl: './views/directives/landingPageDirective.html',
    controller: function($scope, service) {
      var pictureList = ["./img/blue.jpeg", "./img/earth.jpeg", "./img/vortex.jpeg"]
      pictureList.sort(function(a, b) {return 0.5 - Math.random()});

      angular.element(document).find(".intro-video").append("<img src=" + pictureList[0] + " alt='' />")
    },
    link: function(scope, element, attrs) {

    }
  }
})

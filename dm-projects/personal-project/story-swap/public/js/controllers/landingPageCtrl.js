angular.module('storySwap').controller('landingPageCtrl', function($scope, service){
  $scope.test = "Welcome to Story Swap!"

  $scope.form = false;
  $scope.start = false;
  $scope.startButton = true;
  $scope.logIn = true;


  $scope.begin = function(){
    $scope.form = true
    $scope.startButton = false
    $scope.logIn = false
  }

  var videoList = ["./videos/Falling-Leaf.mp4", "./videos/Happy-Street.mp4", "./videos/In-And-Out.mp4", "./videos/The-DJ.mp4"];
  videoList.sort(function(a, b) {return 0.5 - Math.random()});

  console.log(videoList[0]);

  angular.element(document).find(".intro-video").append("<video loop class='background-vid' src=" + videoList[0] + " autoplay poster='posterimage.jpg'></video>");

})

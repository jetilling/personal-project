angular.module('storySwap').directive('landingPageDirective', function(){
  return {
    restrict: 'AE',
    templateUrl: './views/directives/landingPageDirective.html',
    controller: function($scope, service) {
      var videoList = ["./videos/Falling-Leaf.mp4", "./videos/In-And-Out.mp4", "./videos/The-DJ.mp4", "./videos/High-Lines.mp4"];
      videoList.sort(function(a, b) {return 0.5 - Math.random()});

      console.log(videoList[0]);

      angular.element(document).find(".intro-video").append("<video loop class='background-vid' src=" + videoList[0] + " autoplay poster='posterimage.jpg'></video>");

    },
    link: function(scope, element, attrs) {
      $(window).scroll(function(){

        var winScroll = $(this).scrollTop()

        var fixmeTop = $('.main-nav').offset().top;
        var scrollBottom = winScroll + $(window).height();
        console.log(scrollBottom);

    if (winScroll <= fixmeTop) {
        $('.main-nav').css({
            position: 'fixed',
            top: '-86px',
            left: '0'
        });
    } else if (scrollBottom < 1205) {
      $('.main-nav').css({
        'transform': 'translate(0px,'+ winScroll / 5 +'%)'
      })
    } else {
      $('.main-nav').css({
        'transform': 'translate(0px,'- winScroll / 5 +'%)'
      })
    }




          // $('.main-nav').css("top", Math.max(0, -100 - $(this).scrollTop()));


        // $('.signUpBtn').css({
        // 'transform': 'translate(-'+ winScroll / 5 +'%, 0px)'
        // })
        //
        // $('.logInBtn').css({
        //   'transform': 'translate('+ winScroll / 5 +'%, 0px)'
        // })


      })

    }
  }
})

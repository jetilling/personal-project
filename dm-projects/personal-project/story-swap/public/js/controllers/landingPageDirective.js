angular.module('storySwap').directive('landingPageDirective', function(){
  return {
    restrict: 'AE',
    templateUrl: './views/directives/landingPageDirective.html',
    controller: function($scope, service) {
      var videoList = ["./videos/Falling-Leaf.mp4", "./videos/In-And-Out.mp4", "./videos/The-DJ.mp4", "./videos/High-Lines.mp4"];
      videoList.sort(function(a, b) {return 0.5 - Math.random()});

      var pictureList = ["./img/Falling-Leaf.jpg", "./img/In-And-Out.jpg", "./img/The-DJ.jpg", "./img/High-Lines.jpg"]
      pictureList.sort(function(a, b) {return 0.5 - Math.random()});

      angular.element(document).find(".intro-video").append("<video loop class='background-vid' src=" + videoList[0] + " autoplay poster=" + pictureList[0] + "></video>");
      // angular.element(document).find(".intro-video").append("<img src=" + pictureList[0] + " alt='' />")
    },
    link: function(scope, element, attrs) {

      $(window).scroll(function(){

        var winScroll = $(this).scrollTop()

        var fixmeTop = $('.main-nav').offset().top;
        var scrollBottom = winScroll + $(window).height();
        // console.log(scrollBottom);

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

    // var controller = new ScrollMagic.Controller();


    // if (scrollBottom >= 980) {
    //   $('#share').css({
    //     left: '0%'
    //   });
    // } else {
    //   $('#share').css({
    //     'transform': 'translate('+ winScroll / 12 +'%, 0px)'
    //   })
    // }
    //
    // if (scrollBottom >= 1086) {
    //   $('#stories').css({
    //     left: '0%'
    //   });
    // } else {
    //   $('#stories').css({
    //     'transform': 'translate('+ winScroll / 17 +'%, 0px)'
    //   })
    // }
    //
    //
    //   $('#anon').css({
    //     'transform': 'translate('+ winScroll / 35 +'%, 0px)'
    //   })
//     (function() {
//     var method;
//     var noop = function () {};
//     var methods = [
//         'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
//         'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
//         'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
//         'timeStamp', 'trace', 'warn'
//     ];
//     var length = methods.length;
//     var console = (window.console = window.console || {});
//
//     while (length--) {
//         method = methods[length];
//
//         // Only stub undefined methods.
//         if (!console[method]) {
//             console[method] = noop;
//         }
//     }
// }());
//
//     var parallaxTl = new TimelineMax();
// 	parallaxTl
// 		.from('.section-2-title', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
// 		.from('.overlay', 2, {y: '-50%', ease:Power0.easeNone}, 0)
// 		;
//
// 	var slideParallaxScene = new ScrollMagic.Scene({
// 		triggerElement: '.section-2',
// 		triggerHook: 1,
// 		duration: '100%'
// 	})
// 	.setTween(parallaxTl)
// 	.addTo(controller);
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

angular.module('storySwap', ['ui.router', 'storySwap.info', 'storySwap.dashboard'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/').when('/dashboard', '/dashboard/stories');

  $stateProvider
    .state('landingPage', {
      url: '/',
        views: {
          "info@": {
            controller: 'landingPageCtrl',
            templateUrl: './views/landingPage.html'
          }
        }
    })
    .state('login', {
      url: '/login',
        views: {
          "info@": {
            controller: 'loginCtrl',
            templateUrl: './views/login.html'
          }
        }
    })
    .state('signUp', {
      url: '/signUp',
        views: {
          "info@": {
            controller: 'signUpCtrl',
            templateUrl: './views/signUp.html'
          }
        }
    })
    .state('dashboard', {
      url: '/dashboard',
      views: {
          "info@": {
            controller: 'dashboardCtrl',
            templateUrl: './views/dashboard.html',
          }
        }
      })
    .state('dashboard.stories', {
      url: '/stories',
      views: {
        "dashboard@dashboard": {
          controller: 'storiesCtrl',
          templateUrl: './views/stories.html'
        }
      }
    })
    .state('dashboard.following', {
      url: '/following',
      views: {
        "dashboard@dashboard": {
          controller: 'followingCtrl',
          templateUrl: './views/following.html'
        }
      }
    })
    .state('dashboard.drafts', {
      url: '/drafts',
      views: {
        "dashboard@dashboard": {
          controller: 'draftsCtrl',
          templateUrl: './views/drafts.html'
        }
      }
    })
    .state('logout', {
      url: '/logout',
        views: {
          "info@": {
            controller: 'logoutCtrl',
            templateUrl: './views/logout.html'
          }
        }
    })
})

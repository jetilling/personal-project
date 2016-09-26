angular.module('storySwap', ['ui.router', 'storySwap.info', 'storySwap.dashboard'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

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
    .state('dashboard', {
      url: '/dashboard',
        views: {
          "info@": {
            controller: 'dashboardCtrl',
            templateUrl: './views/dashboard.html',
          }
        }
      })
    .state('stories', {
      parent: 'dashboard',
      views: {
        "dashboard@dashboard": {
          controller: 'storiesCtrl',
          templateUrl: './views/stories.html'
        }
      }
    })
    .state('following', {
      parent: 'dashboard',
      views: {
        "dashboard@dashboard": {
          controller: 'followingCtrl',
          templateUrl: './views/following.html'
        }
      }
    })
    .state('uncompletedStories', {
      parent: 'dashboard',
      views: {
        "dashboard@dashboard": {
          controller: 'uncompletedStoriesCtrl',
          templateUrl: './views/uncompletedStories.html'
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

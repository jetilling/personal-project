angular.module('storySwap', ['ui.router', 'storySwap.info', 'storySwap.dashboard', 'satellizer', 'xeditable', 'nvd3'])
.config(function($stateProvider, $urlRouterProvider, $authProvider){
  $urlRouterProvider.otherwise('/').when('/dashboard', '/dashboard/stories');

  var skipIfLoggedIn = ['$q', '$location', '$auth', function($q, $location, $auth) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    $location.path('/dashboard')
  } else {
    console.log('hey');
    deferred.resolve();
  }
  return deferred.promise;
}];

  var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }];

  $stateProvider
    .state('landingPage', {
      url: '/',
        views: {
          "info@": {
            controller: 'landingPageCtrl',
            templateUrl: './views/landingPage.html'
          }
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
    })
    .state('login', {
      url: '/login',
        views: {
          "info@": {
            controller: 'loginCtrl',
            templateUrl: './views/login.html'
          }
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
    })
    .state('confirmLogin', {
      url: '/confirmLogin',
        views: {
          "info@": {
            controller: 'confirmLoginCtrl',
            templateUrl: './views/confirm-login.html'
          }
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
    })
    .state('signUp', {
      url: '/signUp',
        views: {
          "info@": {
            controller: 'signUpCtrl',
            templateUrl: './views/signUp.html'
          }
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
    })
    .state('dashboard', {
      url: '/dashboard',
      views: {
          "info@": {
            controller: 'dashboardCtrl',
            templateUrl: './views/dashboard.html',
          }
        },
        resolve: {
          loginRequired: loginRequired
        }
      })
    .state('dashboard.stories', {
      url: '/stories',
      views: {
        "dashboard@dashboard": {
          controller: 'storiesCtrl',
          templateUrl: './views/stories.html'
        }
      },
      resolve: {
        loginRequired: loginRequired
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
    .state('dashboard.myStories', {
      url: '/myStories',
      views: {
        "dashboard@dashboard": {
          controller: 'myStoriesCtrl',
          templateUrl: './views/myStories.html'
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
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
    })

  $authProvider.loginUrl = '/auth/login';
  $authProvider.signupUrl = '/auth/signup';
})
// })

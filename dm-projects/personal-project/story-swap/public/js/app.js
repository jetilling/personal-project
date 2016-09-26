angular.module('storySwap', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('landingPage', {
      url: '/',
      controller: 'landingPageCtrl.js',
      template: './public/views/landingPage.html'
    }),
    .state('login', {
      url: '/login',
      controller: 'loginCtrl.js',
      template: './public/views/login.html'
    }),
    .state('dashboard', {
      url: '/dashboard',
      controller: 'dashboardCtrl.js',
      template: './public/views/dashboard.html'
    }),
    .state('stories', {
      url: '/stories',
      controller: 'storiesCtrl.js',
      template: './public/views/stories.html'
    }),
    .state('logout', {
      url: '/logout',
      controller: 'logoutCtrl.js',
      template: './public/views/logout.html'
    })
})

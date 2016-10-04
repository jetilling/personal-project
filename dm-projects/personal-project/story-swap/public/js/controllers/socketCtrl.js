angular.module('storySwap').controller('socketCtrl', function($scope){
  var socket = io();

  $scope.$on('story', function(story){
    socket.emit('create story', story)
  })

  socket.on('new story', function(story){
    $scope.$broadcast('new story', story)
  })
})

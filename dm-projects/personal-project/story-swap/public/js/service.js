angular.module('storySwap').service('service', function($http){

  this.getRandomWords = function(){
    return $http({
      method: 'GET',
      url: '/api/randomWords',
    })
  }

  this.getEmail = function(){
    return $http({
      method: 'GET',
      url: '/api/checkEmail'
    })
  }

//create user
  this.createUser = function(email, password, displayName){
    console.log('reached service');
    return $http({
      method: 'Post',
      url: '/api/createUser',
      data: {email: email, password: password, display_name: displayName}
    })
  }


//login
  // this.loginLocal = function(credentials) {
  //   return $http({
  //     method: "POST",
  //     url: 'http://localhost:8080/auth/local',
  //     data: credentials
  //   })
  //   .then(function(res) {
  //     return res.data;
  //   })
  //   .catch(function(err) {
  //     console.log('ERROR LOGGING IN!', err);
  //   })
  // }

  this.getUserId = function() {
    return $http({
      method: 'GET',
      url: '/api/me'
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  this.getDisplayName = function(res){
    return $http({
      method: "GET",
      url: '/api/getDisplayName/' + res
    })
  }


  this.getStories = function(){
    return $http({
      method: "GET",
      url: '/api/stories'
    })
    .then(function(res){
      return res.data
    })
  };

  this.getMyStories = function(currentUserId){
    return $http({
      method: "GET",
      url: '/api/myStories/'+ currentUserId
    })
  }


  this.getDrafts = function(currentUserId){
    return $http({
      method: "GET",
      url: '/api/drafts/'+ currentUserId
    })
    // .then(function(res) {
    //   console.log(res);
    //   return res.data;
    // })
  }

  this.updateDraft = function(data, id){
    return $http({
      method: "PUT",
      url: '/api/updateDraft',
      data: {story: data, id: id}
    })
  }

  this.publishdraft = function(id, complete){
    return $http({
      method: "PUT",
      url: '/api/publishDraft',
      data: {id: id, complete: complete}
    })
  }

  this.add = function(story, currentUserId, complete){
    return $http({
      method: "POST",
      url: '/api/createStory',
      data: {story: story, users_id: currentUserId, complete: complete}
    })
  }

  this.addToLikeCount = function(likeCount, id){
    var newLikeCount = likeCount + 1;
    return $http({
      method: "PUT",
      url: '/api/likeCount',
      data: {id: id, like_count: newLikeCount}
    })
  }

  this.saveStory = function(id, user){
    return $http({
      method: "POST",
      url: '/api/saveStory',
      data: {contentId: id, id: user}
    })
  }

  this.getSavedStories = function(res){
    return $http({
      method: "GET",
      url: '/api/getSavedStories/'+ res
    })
  }

  this.getSavedStoryById = function(item){
    return $http({
      method: "GET",
      url: '/api/getSavedStoryById/'+ item
    })
  }

  this.removeSavedStory = function(id, user){
    return $http({
      method: "PUT",
      url: '/api/removeSavedStory',
      data: {users_id: id, id: user}
    })
  }

  this.followUser = function(users_id, user){
    return $http({
      method: "POST",
      url: '/api/followUser',
      data: {users_id: users_id, id: user}
    })
  }

  this.unfollowUser = function(id, user){
    return $http({
      method: "PUT",
      url: '/api/unfollowUser',
      data: {users_id: id, id: user}
    })
  }

  this.viewFollower = function(id, user){
    return $http({
      method: "POST",
      url: '/api/viewFollower',
      data: {view_follower: id, id: user}
    })
  }

  this.getViewFollower = function(id){
    return $http({
      method: "GET",
      url: '/api/getViewFollower/'+ id
    })
  }

  this.getFollowing = function(res){
    return $http({
      method: "GET",
      url: '/api/getFollowing/'+ res
    })
  }

  this.getFollowingUser = function(item){
    return $http({
      method: "GET",
      url: '/api/getFollowingUser/'+ item
    })
  }

  this.getFollowingUserStory = function(item){
    return $http({
      method: "GET",
      url: '/api/getFollowingUserStory/'+ item
    })
  }

  this.remove = function(id){
    console.log(id);
    return $http({
      method: "DELETE",
      url: '/api/deleteDraft/' + id
    })
  }

  this.removeFromDash = function(id){
    console.log(id);
    var removeFromDash = true
    return $http({
      method: "PUT",
      url: '/api/removeFromDash',
      data: {id: id, delete_from_dash: removeFromDash}
    })
  }
//   this.remove = function(draft){
//     console.log ("Called remove on ", draft);
//
//
//   var index = -1;
//
//   // Find the element in the array
//   for (var i = 0; i < saved.length; i++) {
//       console.log(saved)
//       if (saved[i] === draft) {
//           index = i;
//           break;
//       }
//   }
//
//   // Remove the element
//   if (index !== -1) {
//       console.log ("removing the element from the array, index: ", index);
//       saved.splice(index,1);
//   }
// }

})

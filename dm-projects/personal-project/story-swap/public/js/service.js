angular.module('storySwap').service('service', function($http){

  this.getRandomWords = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:8080/api/randomWords',
    })
  }

  this.getEmail = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:8080/api/checkEmail'
    })
  }

//create user
  this.createUser = function(email, password, displayName){
    console.log('reached service');
    return $http({
      method: 'Post',
      url: 'http://localhost:8080/api/createUser',
      data: {email: email, password: password, display_name: displayName}
    })
  }


//login
  this.loginLocal = function(credentials) {
    return $http({
      method: "POST",
      url: 'http://localhost:8080/auth/local',
      data: credentials
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log('ERROR LOGGING IN!', err);
    })
  }

  this.getUser = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:8080/api/me'
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log(err);
    })
  }



  this.getStories = function(){
    return $http({
      method: "GET",
      url: 'http://localhost:8080/api/stories'
    })
    .then(function(res){
      return res.data
    })
  };

  this.getMyStories = function(currentUserId){
    return $http({
      method: "GET",
      url: 'http://localhost:8080/api/myStories/'+ currentUserId
    })
  }


  this.getDrafts = function(currentUserId){
        // console.log(currentUserId);
    return $http({
      method: "GET",
      url: 'http://localhost:8080/api/drafts/'+ currentUserId
    })
    // .then(function(res) {
    //   console.log(res);
    //   return res.data;
    // })
  }

  this.add = function(story, currentUserId, complete){
    return $http({
      method: "POST",
      url: 'http://localhost:8080/api/createStory',
      data: {story: story, users_id: currentUserId, complete: complete}
    })
  }

  this.addToLikeCount = function(likeCount, id){
    var newLikeCount = likeCount + 1;
    return $http({
      method: "PUT",
      url: 'http://localhost:8080/api/likeCount',
      data: {id: id, like_count: newLikeCount}
    })
  }


  // this.publish = function(publish){
  //   stories.push(publish);
  //   console.log('published');
  // }
  //
  // this.update = function(draft, index){
  //           console.log(draft, index)
  //   for (var i = 0; i < saved.length; i++){
  //     console.log(saved[i])
  //     if (saved[i] === draft){
  //       saved[i] = draft;
  //
  //       return true
  //     }
  //   }
  // }

  this.remove = function(id){
    console.log(id);
    return $http({
      method: "DELETE",
      url: 'http://localhost:8080/api/deleteDraft',
      data: {id: id},
    })
  }

  this.removeFromDash = function(id){
    console.log(id);
    var removeFromDash = true
    return $http({
      method: "PUT",
      url: 'http://localhost:8080/api/removeFromDash',
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

// this.logout = function() {
//   return $http({
//     method: 'GET',
//     url: '/auth/logout'
//   })
//   .then(function(res) {
//     console.log('fired');
//     return res.data;
//   })
//   .catch(function(err) {
//     console.log(err);
//   })
// }

})

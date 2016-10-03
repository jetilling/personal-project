angular.module('storySwap').service('service', function($http){
  // var stories = ['hi', 'hello', 'there', 'you', 'are', 'a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'];
  var user = [];
  var saved = []

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
      url: 'http://localhost:8080/auth/me'
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

  // this.getUser = function(){
  //   return user
  // }

  this.getDrafts = function(){
    return saved
  }

  this.add = function(story, currentUserId){
    return $http({
      method: "POST",
      url: 'http://localhost:8080/api/createStory',
      data: {story: story, users_id: currentUserId}
    })
  }

  this.save = function(saveDraft){
    saved.push(saveDraft)
    console.log('saved');
  }


  this.publish = function(publish){
    stories.push(publish);
    console.log('published');
  }

  this.update = function(draft, index){
            console.log(draft, index)
    for (var i = 0; i < saved.length; i++){
      console.log(saved[i])
      if (saved[i] === draft){
        saved[i] = draft;

        return true
      }
    }
  }

  this.remove = function(draft){
    console.log ("Called remove on ", draft);


  var index = -1;

  // Find the element in the array
  for (var i = 0; i < saved.length; i++) {
      console.log(saved)
      if (saved[i] === draft) {
          index = i;
          break;
      }
  }

  // Remove the element
  if (index !== -1) {
      console.log ("removing the element from the array, index: ", index);
      saved.splice(index,1);
  }
}

})

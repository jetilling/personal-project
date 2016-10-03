angular.module('storySwap').service('service', function($http){
  var stories = ['hi', 'hello', 'there', 'you', 'are', 'a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'];
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

  this.getStories = function(){
    return stories
  }

  this.getUser = function(){
    return user
  }

  this.getDrafts = function(){
    return saved
  }

  this.createUser = function(email, password, displayName){
    console.log('reached service');
    return $http({
      method: 'Post',
      url: 'http://localhost:8080/api/createUser',
      data: {email: email, password: password, display_name: displayName}
    })
  }

  this.add = function(addStory){
      stories.push(addStory)
      console.log('added');
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

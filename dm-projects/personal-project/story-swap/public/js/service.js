angular.module('storySwap').service('service', function($http){
  var stories = ['hi', 'hello', 'there', 'you', 'are', 'a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'];
  var user = [];
  var saved = []

  this.getStories = function(){
    return stories
  }

  this.getUser = function(){
    return user
  }

  this.getDrafts = function(){
    return saved
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

  this.remove = function(publish){
    saved.splice(publish, 1);
  }


  this.createUser = function(create){
    user.push(create)
    console.log("created");
  }


})

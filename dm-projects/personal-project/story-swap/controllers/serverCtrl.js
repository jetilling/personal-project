var app = require('../server');
var db = app.get('db');
var randomWords = require('random-words')

module.exports = {

  randomWords: function(req, res){
    i = 0
    var random = []
    do {
      random.push(randomWords({exactly: 2, join: ' '}))
      i++
  } while (i < 3)
    res.status(200).send(random)
  },

  checkEmail: function(req, res){
    db.check_email(function(err, users){
      if (err) console.log(err);
      else res.status(200).json(users)
    })
  },

  getCurrentUser: function(req, res){
    res.send(req.user)
  },

  getDisplayName: function(req, res){
    db.getUserById([req.params.id], function(err, users){
      if(err) console.log(err);
      else res.status(200).json(users);
    })
  },

  createUser: function(req, res){
    db.create_user([req.body.email, req.body.password, req.body.display_name], function(err, users){
      if(err) console.log(err);
      else res.status(200)
    })
  },

  createStory: function(req, res){
    db.create_story([req.body.story, req.body.users_id, req.body.complete], function(err, content){
      if(err) console.log(err);
      else res.status(200)
    });
  },

  getUser: function(req, res){
    db.get_user([req.body.email, req.body.password], function(err, users){
      if(err) console.log(err);
      else res.status(200).json(users);
    })
  },

  readStories: function(req, res){
    db.get_stories(function(err, content){
      if(err) console.log(err);
      else res.status(200).json(content)
    });
  },

  getDrafts: function(req, res){
    db.view_drafts([req.params.id], function(err, content){
      if(err) console.log(err);
      else res.status(200).json(content)
    })
  },

  getMyStories: function(req, res){
    db.view_my_stories([req.params.id], function(err, content){
      if(err) console.log(err);
      else {res.status(200).json(content); console.log(req.params.id);}
    })
  },

  removeFromDash: function(req, res){
    db.delete_story_from_dash([req.body.id, req.body.delete_from_dash], function(err, content){
      if(err) console.log(err);
      else res.status(200).json(true)
    })
  },

  deleteDraft: function(req, res){
    db.delete_draft([req.params.id], function(err, content){
      if(err) console.log(err);
      else res.status(200).json(true)
    })
  },

  updateDraft: function(req, res){
    db.update_draft([req.body.story, req.body.id], function(err, content){
      if(err) console.log(err);
      else res.status(200).json(true)
    })
  },

  publishDraft: function(req, res){
    db.publish_draft([req.body.id, req.body.complete], function(err, content){
      if(err) console.log(err);
      else res.status(200).json(true)
    })
  },

  updateLikeCount: function(req, res){
    db.like_story([req.body.id, req.body.like_count], function(err, content){
      if(err) console.log(err);
      else res.status(200).json(true)
    })
  },

  saveStory: function(req, res){
    db.save_story([req.body.storyId, req.body.id], function(err, users){
      if(err) console.log(err);
      else res.status(200)
    })
  },

  followUser: function(req, res){
    db.follow_user([req.body.users_id, req.body.id], function(err, users){
      if(err) console.log(err);
      else res.status(200).json(true)
    })
  },

  unfollowUser: function(req, res){
    db.unfollow_user([req.body.users_id, req.body.id], function(err, users){
      if(err) console.log(err);
      else res.status(200).json(true)
    })
  },

  viewFollower: function(req, res){
    db.view_follower([req.body.view_follower, req.body.id], function(err, users){
      if(err) console.log(err);
      else res.status(200).json(users)
    })
  },

  getViewFollower: function(req, res){
    db.get_view_follower([req.params.id], function(err, users){
      if(err) console.log(err);
      else res.status(200).json(users)
    })
  },

  getFollowing: function(req, res){
    db.view_following_id([req.params.id], function(err, users){
      if(err) console.log(err);
      else res.status(200).json(users)
    })
  },

  getFollowingUser: function(req, res){
    db.view_following_stories_storiesPage([req.params.id], function(err, users){
      if(err) console.log(err);
      else res.status(200).json(users);
    })
  },

  getFollowingUserStory: function(req, res){
    db.view_following_stories_followingPage([req.params.id], function(err, users){
      if(err) console.log(err);
      else res.status(200).json(users);
    })
  }



}

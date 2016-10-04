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

  deleteDraft: function(req, res){
    db.delete_draft([req.body.id], function(err, content){
      if(err) console.log(err);
      else {res.status(200); console.log('deleted');}
    })
  },

  updateLikeCount: function(req, res){
    db.like_story([req.body.id, req.body.like_count], function(err, content){
      if(err) console.log(err);
      else {res.status(200); console.log(req.body.id, req.body.like_count);}
    })
  },

  followUser: function(req, res){
    db.follow_user([req.body.id, req.body.users_id], function(err, content){
      if(err) console.log(err);
      else res.status(200)
    })
  }



}

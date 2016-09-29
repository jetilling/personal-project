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
      if (err){
        console.log(err)
      } else {
        res.status(200).json(users)
      }
    })
  },

  createUser: function(req, res){
    //make creation_date linked to a button click if creation_date doesn't work
    db.create_user([req.body.email, req.body.password, req.body.display_name], function(err, users){
      if(err){
        console.log(err)
      } else {
        res.status(200)
      };
    })
  },

  createStory: function(req, res){
    db.create_story([req.body.story, req.body.date_posted, req.body.complete, req.body.category], function(err, content){
      if(err){
        console.log(err)
      } else {
        res.status(200)
      };
    });
  },

  getUser: function(req, res){
    db.get_user([req.body.email, req.body.password], function(err, users){
      if(err){
        console.log(err)
      } else {
        res.status(200).json(users)
      }
    })
  },

  readStories: function(req, res){
    db.get_stories(function(err, content){
      if(err){
        console.log(err);
      } else {
        res.status(200).json(content)
      };
    });
  },



}

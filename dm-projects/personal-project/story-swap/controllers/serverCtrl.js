var app = require('../server');
var db = app.get('db');

module.exports = {
  createUser: function(req, res){

    //make creation_date linked to a button click if creation_date doesn't work
    db.create_user([req.body.email, req.body.password, req.body.year_born, req.body.display_name], function(err, users){
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

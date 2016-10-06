var express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    jwt = require('jwt-simple'),
    moment = require('moment'),
    // server = require('http').createServer(app), //added
    // io = require('socket.io')(server),
    config = require('./config.json')

var db = massive.connectSync({
  db: 'story_swap'
});

var corsOptions = {
  origin: 'http://localhost:8080'
}

var app = module.exports = express();
app.set('db', db);
var serverCtrl = require('./controllers/serverCtrl')

app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));


/*
 |--------------------------------------------------------------------------
 | Login Required Middleware
 |--------------------------------------------------------------------------
 */
function ensureAuthenticated(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.header('Authorization').split(' ')[1];

  var payload = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ message: err.message });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
}
/*
 |--------------------------------------------------------------------------
 | Generate JSON Web Token
 |--------------------------------------------------------------------------
 */
function createJWT(user) {
  var payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}

/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */

app.get('/api/me', ensureAuthenticated, function(req, res) {
    if (!req.user) return res.status(404);
    var user = req.user
    res.json(user)
  })

/*
 |--------------------------------------------------------------------------
 | PUT /api/me
 |--------------------------------------------------------------------------
 */
app.put('/api/me', ensureAuthenticated, function(req, res) {
  db.users.findById(req.user, function(err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.email = req.body.email || user.email;
    user.save(function(err) {
      res.status(200).end();
    });
  });
});


/*
 |--------------------------------------------------------------------------
 | Log in with Email
 |--------------------------------------------------------------------------
 */

 comparePassword = function(password, userPassword, user){
     if (password === userPassword) {
       return true
     }
   }

app.post('/auth/login', function(req, res) {
      db.users.findOne({email: req.body.email}, function(err, user) {
          if (err) return res.status(500)
          if (!user) {
            return res.status(401).send({
              message: 'Invalid email and/or password'
            })
          }
          else if(!comparePassword(req.body.password, user.password, user)){
            return res.status(401).send({
              message: 'Invalid email and/or password'
            })
          }
          res.send({
            token: createJWT(user),
            user: getSafeUser(user)
          })

    });
});

/*
 |--------------------------------------------------------------------------
 | Create Email and Password Account
 |--------------------------------------------------------------------------
 */
app.post('/auth/signup', function(req, res) {
  db.users.findOne({ email: req.body.email }, function(err, existingUser) {
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken' });
    }
    else {
      db.create_user([req.body.email, req.body.password, req.body.display_name], function(err, users){
        db.users.findOne({email: req.body.email}, function(err, user){
          res.send({
                    token: createJWT(user),
                    user: getSafeUser(user)
                  });
        })
      })
    }


    });
  });


function getSafeUser (user) {
  return {
    id: user.id,
    email: user.email,
    display_name: user.display_name,
    follows: user.follows,
    savedStories: user.saved_stories
  }
}




//database requests
app.get('/api/randomWords', ensureAuthenticated, serverCtrl.randomWords);
app.get('/api/checkEmail', ensureAuthenticated, serverCtrl.checkEmail);
app.get('/api/dashboard', ensureAuthenticated, serverCtrl.getUser);
app.get('/api/stories', ensureAuthenticated, serverCtrl.readStories);
app.get('/api/drafts/:id', ensureAuthenticated, serverCtrl.getDrafts);
app.get('/api/myStories/:id', ensureAuthenticated, serverCtrl.getMyStories);
app.get('/api/getDisplayName/:id', ensureAuthenticated, serverCtrl.getDisplayName);
app.get('/api/getFollowing/:id', ensureAuthenticated, serverCtrl.getFollowing);
app.get('/api/getFollowingUser/:id', ensureAuthenticated, serverCtrl.getFollowingUser);
app.get('/api/getFollowingUserStory/:id', ensureAuthenticated, serverCtrl.getFollowingUserStory);
app.get('/api/getViewFollower/:id', ensureAuthenticated, serverCtrl.getViewFollower);
app.post('/api/createUser', ensureAuthenticated, serverCtrl.createUser);
app.post('/api/createStory', ensureAuthenticated, serverCtrl.createStory);
app.post('/api/followUser', ensureAuthenticated, serverCtrl.followUser);
app.post('/api/viewFollower', ensureAuthenticated, serverCtrl.viewFollower);
app.put('/api/likeCount', ensureAuthenticated, serverCtrl.updateLikeCount);
app.put('/api/followUser', ensureAuthenticated, serverCtrl.followUser);
app.put('/api/removeFromDash', ensureAuthenticated, serverCtrl.removeFromDash);
app.put('/api/unfollowUser', ensureAuthenticated, serverCtrl.unfollowUser)
app.delete('/api/deleteDraft', ensureAuthenticated, serverCtrl.deleteDraft);


// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('create story', function(story){
//     app.post('/api/createStory', serverCtrl.createStory);
//
//   io.emit('new story', story);
//   });
// });

app.listen(config.port, function(){
  console.log("got 'er listen' on", config.port);
})

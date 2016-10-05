var express = require('express'),
    // session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    // passport = require('passport'),
    // LocalStrategy = require('passport-local').Strategy,
    cors = require('cors'),
    // expressJWT = require('express-jwt'),
    // jwt = require('jsonwebtoken')
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
// app.use(expressJWT({secret: config.expressJWTSecret}).unless({path: ['/#/', '/#/login', '/#/signUp']}));
// app.use(session({
//   secret: config.sessionSecret,
//   saveUninitialized: true,
//   resave: true
// }))
// app.use(passport.initialize());
// app.use(passport.session());
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
//
// findById = function(user){
//   db.users.getUserById([], function(err, users){
//     return users
//   })
// }

// app.get('/api/me', ensureAuthenticated, function(req, res) {
//   db.users.getUserById([req.user], function(err, users){
//     res.send(users)
//   })
// });

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
// });

function getSafeUser (user) {
  return {
    id: user.id,
    email: user.email,
    display_name: user.display_name,
    follows: user.follows,
    savedStories: user.saved_stories
  }
}


// restrict = function(req, res, next){
//   if(req.isUnauthenticated()) return res.status(401).json('please log in')
//   next();
// }

//login stuff w/sessions
// passport.use(new LocalStrategy(
//   {usernameField: 'email'},
//   function(email, password, done) {
//     db.users.findOne({email: email}, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (user.password != password) { return done(null, false); }
//       console.log('from LocalStrategy',user);
//       return done(null, user);
//     })
//   }
// ))
//
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// })
//
// passport.deserializeUser(function(id, done) {
//   db.getUserById([id], function(err, user) {
//     if (err) console.log(err);
//     else console.log('RETRIEVED USER');
//     done(null, user);
//   })
// })
//
// app.post('/auth/local', passport.authenticate('local'), function(req, res) {
//   res.status(200).send(true);
// });
//
// app.get('/auth/me', restrict, function(req, res) {
//   if (!req.user) return res.sendStatus(404);
//   res.status(200).send(req.user);
// })
//
// app.get('/auth/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
//     console.log('logged out');
// })


//database requests
app.get('/api/randomWords', ensureAuthenticated, serverCtrl.randomWords);
app.get('/api/checkEmail', ensureAuthenticated, serverCtrl.checkEmail);
app.get('/api/dashboard', ensureAuthenticated, serverCtrl.getUser);
app.get('/api/stories', ensureAuthenticated, serverCtrl.readStories);
app.get('/api/drafts/:id', ensureAuthenticated, serverCtrl.getDrafts);
app.get('/api/myStories/:id', ensureAuthenticated, serverCtrl.getMyStories);
app.post('/api/createUser', ensureAuthenticated, serverCtrl.createUser);
app.post('/api/createStory', ensureAuthenticated, serverCtrl.createStory);
app.put('/api/likeCount', ensureAuthenticated, serverCtrl.updateLikeCount);
app.put('/api/followUser', ensureAuthenticated, serverCtrl.followUser);
app.put('/api/removeFromDash', ensureAuthenticated, serverCtrl.removeFromDash);
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

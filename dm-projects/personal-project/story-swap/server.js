var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    cors = require('cors'),
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
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

restrict = function(req, res, next){
  if(req.isUnauthenticated()) return res.status(401).json('please log in')
  next();
}

//login stuff
passport.use(new LocalStrategy(
  {usernameField: 'email'},
  function(email, password, done) {
    db.users.findOne({email: email}, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password != password) { return done(null, false); }
      console.log('from LocalStrategy',user);
      return done(null, user);
    })
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.id);
})

passport.deserializeUser(function(id, done) {
  console.log('fired!');
  db.getUserById([id], function(err, user) {
    // user = user[0];
    if (err) console.log(err);
    else console.log('RETRIEVED USER');
    // console.log('from deserializeUser',user);
    done(null, user);
  })
})

app.post('/auth/local', passport.authenticate('local'), function(req, res) {
  // console.log(req.user, "post local");
  // res.redirect('/#/dashbaord')
  res.status(200).send(true);
});

app.get('/auth/me', restrict, function(req, res) {
  if (!req.user) return res.sendStatus(404);
  res.status(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  // res.redirect('/');
})


//database requests
app.get('/api/randomWords', serverCtrl.randomWords);
app.get('/api/checkEmail', serverCtrl.checkEmail);
app.get('/api/dashboard', serverCtrl.getUser);
app.get('/api/stories', serverCtrl.readStories);
app.post('/api/createUser', serverCtrl.createUser);
app.post('/api/createStory', serverCtrl.createStory);



app.listen(config.port, function(){
  console.log("got 'er listen' on", config.port);
})

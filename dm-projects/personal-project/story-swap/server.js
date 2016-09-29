var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
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

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}))

// console.log(randomWords({exactly: 3, join: ' '}))
// console.log(randomWords({exactly: 3, join: ' '}))
// console.log(randomWords({exactly: 3, join: ' '}))

app.get('/api/randomWords', serverCtrl.randomWords)
app.get('/api/checkEmail', serverCtrl.checkEmail)
app.get('/api/dashboard', serverCtrl.getUser);
app.post('/api/createUser', serverCtrl.createUser);



app.listen(config.port, function(){
  console.log("got 'er listen' on", config.port);
})

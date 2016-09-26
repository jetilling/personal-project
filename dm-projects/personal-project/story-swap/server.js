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
var serverCtrl = require('./controllers/serverCtrl')

app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}))


app.listen(config.port, function(){
  console.log("got 'er listen' on", config.port);
})

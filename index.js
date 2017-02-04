var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//basic Middleware
app.disable('x-powered-by');
app.set('port',process.env.PORT || 3000);

//view Middleware
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//testing
var users1 = [
  {
    "index": 0,
    "first_name": "Kristin",
    "last_name": "Edwards",
    "email": "kristinedwards@ovolo.com"
  },
  {
    "index": 1,
    "first_name": "Franks",
    "last_name": "Hubbard",
    "email": "frankshubbard@ovolo.com"
  },
  {
    "index": 2,
    "first_name": "Hendricks",
    "last_name": "Mathews",
    "email": "hendricksmathews@ovolo.com"
  },
  {
    "index": 3,
    "first_name": "Hester",
    "last_name": "Newton",
    "email": "hesternewton@ovolo.com"
  },
  {
    "index": 4,
    "first_name": "Steele",
    "last_name": "Pacheco",
    "email": "steelepacheco@ovolo.com"
  },
  {
    "index": 5,
    "first_name": "Merle",
    "last_name": "Vinson",
    "email": "merlevinson@ovolo.com"
  }
];

//bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//var logger = function(req , res, next) {
//    console.log('logging...');
//    next();
//};
//
//app.use(logger);


app.get('/', function(req, res){
    res.render('index',{ title: 'Bucky' , users: users1 });
});

app.listen(app.get('port'),function(){
   console.log('Express started http:/localhost:'+app.get('port'));
    console.log('press Ctrl-c to terminate.');
});
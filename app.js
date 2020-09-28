
var express=require('express');
var app=express();
var path=require('path');
const bodyParser=require('body-parser');

var dashboard=require('./Controller/Dashboard');
var form=require('./Controller/Form');
var cvlist=require('./Controller/CvList');


//configure app
app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'views'));

// use middleware
// app.use(bodyParser());
// app.use('/abc', express.static('assets'));
app.use('/link', express.static('bower_components'));
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(bodyParser.urlencoded({extended: false}));


//router
//app.use(require('./model'));
app.use('/',dashboard);
app.use('/form',form);
app.use('/cvlist',cvlist);


// app.use('/transaction',transaction);

//server start
var port=process.env.PORT || 3333;
app.listen(port,function(){
  console.log('port is open in 3333');
})

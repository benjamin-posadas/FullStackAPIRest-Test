var express = require('express');
var bodyParser = require('body-parser');
var db = require('./scripts/db');
var dataBitso = require('./scripts/dataBitso');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


app.get('/',function(req,res){
	res.send('Servidor REST');
});

app.get('/api/getIntervalData/:interval',function(req,res){
	db.getDataFromInterval(req.params.interval,res);
});

app.get('/api/getLastData/:lastDate',function(req,res){
	db.getLastData(req.params.lastDate,res);
});

db.connectDB().then(function(){
	console.log('Servidor corriendo en el puerto '+port);
	dataBitso.getDataTicker();
}).catch(function(err){
	console.log(err);
});

app.listen(port);
var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/mydb";
var Ticker = require('../models/ticker');
var moment = require('moment');

module.exports.connectDB = function(){
	mongoose.Promise = global.Promise;
	return mongoose.connect('mongodb+srv://<user>:<password>@cluster0-mmaqe.mongodb.net/bitcoinData?retryWrites=true',{useNewUrlParser:true});
}

module.exports.insertData = function(data){
	var tickerData = JSON.parse(data).payload;
	tickerData.created_at = (new Date()).getTime();
	var newData = new Ticker(tickerData);
	newData.save(function(err){
		if (err) throw err;
	});
}

module.exports.getDataFromInterval = function(interval,res){
	var dateNow = moment().valueOf();
	var dateBefore = moment().subtract(interval,'seconds').valueOf();
	Ticker.find({
		"created_at":{
			$gte:dateBefore,
			$lte:dateNow
		}
	},{
		last:1,created_at:1
	}).exec(function(err, tickers){
		if(err) throw err;
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.send(tickers.map(function(tick){return {last:tick.last,created_at:tick.created_at}}));
	});
}

module.exports.getLastData = function(lastDate,res){
	console.log('getLastData');
	var dateNow = moment().valueOf();
	var dateBefore = lastDate;
	Ticker.find({
		"created_at":{
			$gte:dateBefore,
			$lte:dateNow
		}
	},{
		last:1,created_at:1
	}).exec(function(err, tickers){
		if(err) throw err;
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.send(tickers.map(function(tick){return {last:tick.last,created_at:tick.created_at}}));
	});
}
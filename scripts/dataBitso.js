var https = require('https');
var db = require('./db');

module.exports.getDataTicker = function(){
	setInterval(function(){
		https.get({
			hostname : 'api.bitso.com',
			path: '/v3/ticker/?book=btc_mxn'
		},function(res){
			var responseString = '';
			res.on('data', function(data){
				responseString += data;
				db.insertData(responseString);
			});

			res.on('end', function(){
				if(res.statusCode == 200){
					//Consulta a la api de bitso
				}
			});
		});
	},5000);
}
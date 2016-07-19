var request = require('request');
var apiKey = '&appid=29f6869598e697aeb014503acc32a987';
var units = '&units=imperial'
var location = 'mexicali'

module.exports = function(location){
	return new Promise(function(resolve, reject){
		var encodeLocation = encodeURIComponent(location)
		var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodeLocation+units+apiKey;

		if(!location){
			return reject('No location provided.');
		}

		request({
			url: url,
			json: true
		}, function(error, response, body){
			if(error){
				reject('Unable to fetch weather.');
			}else{
				resolve('It\'s ' + body.main.temp +' in '+ body.name);
			}
		})
	})
}
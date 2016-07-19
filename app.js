var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
	.option('location',{
		alias: 'l',
		demand: false,
		description: 'Location to fetch weather for',
		type: 'string'
	})
	.help('help')
	.argv;

if(typeof argv.l === 'string' && argv.l.length > 0){
	weather(argv.l).then(function(currentWeather){
		console.log(currentWeather);
	}).catch(function(error){
		console.log(error);
	})
}else{
	location().then(function(location){
		return weather(location.city);
	}).then(function(currentWeather){
		console.log(currentWeather);
	}).catch(function(error){
		console.log(error);
	})
}
/*The app consumes the weather API at openweathermap.org
   it displays the weather conditions in Lagos while using chalk and
   figlet for some styling*/

var chalk = require('chalk');
var http = require ('http');
var figlet = require ('figlet');
//var lat = process.argv[0];
//var lon = process.argv[1];

figlet('Local Weather', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

function getJSON(options, cb){
	http.request(options, function(res){
		var body = '';

		res.on('data', function(chunk){
		body+= chunk;
		});

	

		res.on('end', function(){
			var data = JSON.parse(body);
			var weather = data.weather[0].description;
			var temp = Math.round((data.main.temp)*100)/100;
			var city = data.name;
    		var country = data.sys.country;
    		var windSpeed = data.wind.speed;
			console.log(chalk.cyan.italic("Location: "  +city +', '+country));
			console.log(chalk.cyan.italic("Weather: "  +weather));
			console.log(chalk.cyan.italic("Temperature: "  +temp+"°C"));
			console.log(chalk.cyan.italic("Wind speed: "  +windSpeed+ "Kmph"));
		});

		res.on('error', cb);

	}).on('error', cb)
	.end();

}

var options = {
	host: 'api.openweathermap.org',
	port: 80,
	path: '/data/2.5/weather?lat=6.4531&lon=3.3958&appid=4c78e3460c3ae1baf6c9b67990be0803&units=metric', 
	method: 'GET'
};

getJSON(options, function(err, result){
	if(err){
		return console.log("An error occured while trying to get data:", err)
	}

	console.log(data);
});
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
// parse application.
app.use(bodyParser.urlencoded({
  extended: true
}));

// Respond on request with loading Home page.
app.get('/', (req, res) => {

  //URL to get information from.
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=250b9be7c051920031529c06569a4ced&units=metric';
  //HTTPS get request to openweathermap.org
  https.get(url, (response) => {

    console.log(response.statusCode);

    response.on('data', (data) => {
      //Parse the received data into Json format.
      const weatherData = JSON.parse(data);
      //Store received data.
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const weatherLocation = weatherData.name;
      const weatherIcon = weatherData.weather[0].icon + '.png';
      const icon = 'http://openweathermap.org/img/wn/'+ weatherIcon + '"';


      //Send the received data to the user.
      res.write('<p>The weather in ' + weatherLocation + ' is curently ' + weatherDescription + '</p>');
      res.write('<h1> The temperature in London is ' + temp + ' degrees Celcius.</h1>');
      res.write('<img src="http://openweathermap.org/img/wn/'+ weatherIcon + '" alt="weather img">');
      res.send();
    })
  });

});
//Respond to POST request on the root route (/)
app.post('/', (req, res) => {

});
//Run server on port 3000.
app.listen(3000, () => {
  console.log("Server runs on port 3000");
});

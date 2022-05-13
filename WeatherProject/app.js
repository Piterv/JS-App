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
  res.sendFile(__dirname + "/index.html");

  //URL to get information from.
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=250b9be7c051920031529c06569a4ced&units=metric&lang=ua';
 //HTTPS get request to openweathermap.org
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on('data', (data) => {
      const weatherData = JSON.parse(data);

      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.main.icon;

      console.log(temp);
      console.log(weatherDescription );
      console.log(weatherData);
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

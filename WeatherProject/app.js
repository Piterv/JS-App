const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
// use body-parse application.
app.use(bodyParser.urlencoded({
  extended: true
}));

//Serve static main.css file.
app.use(express.static('public'));

// Respond on request with loading Home page.
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});



app.post("/", (req, res)=>{
  console.log("Post request " + req.body.CityInput);

  //URL to get information from.
  const quiry = req.body.CityInput;
  const apiKey = "250b9be7c051920031529c06569a4ced";
  const unit = "metric";
  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ quiry +'&appid='+ apiKey +'&units='+ unit +'';
  //HTTPS get request to openweathermap.org
  https.get(url, (response) => {

    console.log("Server openweathermap response code: " + response.statusCode);

    response.on('data', (data) => {
      //Parse the received data into Json format.
      const weatherData = JSON.parse(data);
      //Store received data.
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const weatherLocation = weatherData.name;
      const weatherIcon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png";

      //Send the received data to the user.
      res.write('<p>The weather curently is ' + weatherDescription + '</p>');
      res.write('<h1> The temperature in '+ quiry +' is ' + temp + ' degrees Celcius.</h1>');
      res.write('<img src='+ imageURL +' alt="weather img">');
      res.send();
    })
  });
})


//Run server on port 3000.
app.listen(3000, () => {
  console.log("Server runs on port 3000");
});

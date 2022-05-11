const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//parse application.
app.use(bodyParser.urlencoded({
  extended: true
}));
//Respond to GET request on the root route(/).
app.get('/', (get, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});
//Respond to POST request on the root route (/).
app.post('/', (req, res) => {

  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  let bmi = Math.round(weight / (Math.pow(height, 2)));

  let interpretation;

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  }
  if (bmi > 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  res.send(interpretation);
});
// Starts a server and listens on port 3000 for connections
app.listen(3000, () => {
  console.log("Server runs on port 3000");
});

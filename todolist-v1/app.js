const express = require("express");
const bodyParser = require("body-parser");
//Name of the weekday.
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const app = express();

//
app.set('view engine', 'ejs');

//parse aplication
app.use(bodyParser.urlencoded({
  extended: true
}));

//Get method handler.
app.get("/", (req, res) => {

  const today = new Date();
  let currentDay = today.getDay();
  let day = weekday[currentDay];

  res.render('list', {kindOfDay: day});
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});

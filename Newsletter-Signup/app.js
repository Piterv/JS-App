//Require modules.
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

const app = express();

//Use parse application.
app.use(bodyParser.urlencoded({
  extended: true
}));
//A middleware for serving static files.
app.use(express.static('public'))

// GET method route
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/signup.html", (err) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });
});

// POST method route
app.post('/', (req, res) => {

  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;

  // Send success or error page.

    res.sendFile(__dirname + "/success.html");

});

// Deploy the server on port 3000
app.listen(3000, () => {
  console.log('The server runs on portn 3000');
});

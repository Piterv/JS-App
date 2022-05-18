//Require modules.
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const https = require("https");

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

//Get user data from HTML form and store them by category.
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  //Object data schema.
  let data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  // Turn data into JSON.
  const jsonData = JSON.stringify(data);
  const url = "https://us10.api.mailchimp.com/3.0/lists/57b1f6ff97";
  const options = {
    method: "POST",
    auth: "peter1:7cabbdc02fc2ebd0e1562b9e7fc7f7d7-us10"
  }

  //Create request to the mailchimp server.
  const request = https.request(url, options, (response) => {
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.on('error', (e) => {
    console.error("Thi is request eror" + e);
  });

  //Send request to the mailchimp server.
  request.write(jsonData);
  //Done with the request.
  request.end();

  // Send success page to the user.
  res.sendFile(__dirname + "/success.html");
});





// Deploy the server on port 3000
app.listen(3000, () => {
  console.log('The server runs on portn 3000');
});

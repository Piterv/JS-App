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
  //Audience url.
  const url = "https://us10.api.mailchimp.com/3.0/lists/1aad9a8f5f";
  //API Key.
  const options = {
    method: "POST",
    auth: ""
  }

  //Create request to the mailchimp server.
  const request = https.request(url, options, (response) => {
    //Handle response from mailchimp server.
    response.on("data", (data) => {

      let serverResponse = (JSON.parse(data));
      console.log(serverResponse);

      if (response.statusCode <= 200 || response.statusCode >= 300) {
        console.log(`Successful HTTP request status code: ${response.statusCode}`);

        // Send error page to the user.
        res.sendFile(__dirname + "/success.html");
      } else {
        console.log(`Error statusCode: ${response.statusCode}`);
        // Send success page to the user.
        res.sendFile(__dirname + "/error.html");
      }
    });

  });

  //Send request to the mailchimp server.
  request.write(jsonData);
  //Done with the request.
  request.end();
});

app.post('/error', (req, res) => {

  res.redirect('/');
});

// Deploy the server on port 3000
app.listen(3000, () => {
  console.log('The server runs on portn 3000');
});

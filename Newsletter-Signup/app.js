//Require modules.
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
//
const app = express();

//A middleware for serving static files.
app.use(express.static('public'));

//Parse application.
app.use(bodyParser.urlencoded({
  extended: true
}));

//Response to the get root method of the website.
app.get('/', (req, res) => {

  res.sendFile(__dirname + "/public/signup.html", (err)=>{
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });
});

// Deploy the server on port 3000
app.listen(3000, () => {
  console.log('The server runs on portn 3000');
});

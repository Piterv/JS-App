
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

//
app.set('view engine', 'ejs');

//parse aplication
app.use(bodyParser.urlencoded({extended: true}));

//Get method handler.
app.get("/", (req, res)=>{
  const today = new Date();
  let day = weekday[today.getDay()];

  if(today.getDay()){

    res.sendFile(__dirname + "/index.html");
  }else{
    res.send("Boo! I have to work");
  }

});


app.listen(3000, ()=>{
  console.log("Server started on port 3000");
});

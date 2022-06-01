const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//parse aplication
app.use(bodyParser.urlencoded({extended: true}));
//Serving static files.
app.use(express.static('public'));
// Colection of to-do list items.
let items = ["Buy Food"];

//EJS looks in the folder: view.
app.set('view engine', 'ejs');


//Get method handler.
app.get("/", (req, res) => {

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  const today = new Date();
  let currentDay = today.toLocaleDateString('en-US', options);

  res.render('list', { kindOfDay: currentDay, newListItems: items});
});

//Post method handler.
app.post("/", (req, res)=>{
  console.log(req.body.newItem);
  let item = req.body.newItem;
  items.push(item);

//Redirect to root route: "/".
  res.redirect('/');
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

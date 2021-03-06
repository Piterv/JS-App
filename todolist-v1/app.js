const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//parse aplication
app.use(bodyParser.urlencoded({
  extended: true
}));
//Serving static files.
app.use(express.static('public'));
// Colection of to-do list items.
let items = ["Buy Food"];
let workItems = [];
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

  res.render('list', {
    listTitle: currentDay,
    newListItems: items
  });
});

//Get method handler for work route.
app.get("/work", (req, res) => {
  res.render('list', {
    listTitle: "Work List",
    newListItems: workItems
  });
})

app.get("/about", (req, res)=>{
  res.render('about');
})

//Post method handler.
app.post("/", (req, res) => {
console.log(req.body);

  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect('/work');
  }else {
    items.push(item);
    res.redirect('/');
  }

});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

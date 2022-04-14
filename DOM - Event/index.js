const paraGoogle = document.createElement("p");
const nodeGoogle = document.createTextNode("This is new.");
paraGoogle.appendChild(nodeGoogle);


const paraBing = document.createElement("p");
const nodeBing = document.createTextNode("This is new.");
paraBing.appendChild(nodeBing);

const paraDuckDuckGo = document.createElement("p");
const nodeDuckDuckGo = document.createTextNode("This is new.");
paraDuckDuckGo.appendChild(nodeDuckDuckGo);



var inputVisibility = document.querySelector("input");
// Selects Button tag.
var deleteLink = document.querySelector('button');
//Stores the search engine button class names.
var searchButtons = document.querySelectorAll('.search_engines button');

var element = document.querySelectorAll('.search_engines li');

//The function listen to the input tag and assigns or sunsets a hidden attribute to a button.
inputVisibility.addEventListener('click', function(event) {

  var status = document.querySelector('button').hasAttribute("hidden");
  if (status == false) {
    return deleteLink.hidden = true;
  } else {
    return deleteLink.hidden = false;
  }
});

//Functon listent to button tag.
deleteLink.addEventListener('click', function(event) {
  event.preventDefault();

  var choice = confirm("sure u want to delete?");
  if (choice) {
    return deleteLink.hidden = true;
  } else {
    return deleteLink.classList.toggle("huge");
  }
});

//Search engine buttom tags listener. ADD and DELETE HTML tag <p>.

Array.from(searchButtons).forEach(link => {
  link.addEventListener('click', function(event) {
    var tagName;

    if ("node" + event.target.className === "nodeGoogle") {

      if (document.body.contains(document.querySelector(".paraGoogle")) == false) {
        const buttonGoogle = element[0].appendChild(paraGoogle).classList.add("paraGoogle");
      } else {
        const className = document.querySelectorAll('.search_engines .search_G p');
        className[0].remove();
      }

    } else if ("node" + event.target.className === "nodeBing") {

      if (document.body.contains(document.querySelector(".paraBing")) == false) {
        const buttonBing = element[1].appendChild(paraBing).classList.add("paraBing");
      } else {
        const className = document.querySelectorAll('.search_engines .search_B p');
        className[0].remove();
      }

    } else if ("node" + event.target.className === "nodeDuckDuckGo") {

      if (document.body.contains(document.querySelector(".paraDuckDuckGo")) == false) {
        const buttonDuckDuckGo = element[2].appendChild(paraDuckDuckGo).classList.add("paraDuckDuckGo");
      } else {
        const className = document.querySelectorAll('.search_engines .search_D p');
        className[0].remove();
      }
    }
  });
});

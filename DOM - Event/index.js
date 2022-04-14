//Start creating  HTML element as respons on Button click<p>
const paraGoogle = document.createElement("p");
const nodeGoogle = document.createTextNode("Google LLC is an American multinational technology company that focuses on artificial intelligence, search engine, online advertising, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.");
paraGoogle.appendChild(nodeGoogle);

const paraBing = document.createElement("p");
const nodeBing = document.createTextNode("Microsoft Bing is a web search engine owned and operated by Microsoft. The service has its origins in Microsoft's previous search engines: MSN Search, Windows Live Search and later Live Search. Bing provides a variety of search services, including web, video, image and map search products.");
paraBing.appendChild(nodeBing);

const paraDuckDuckGo = document.createElement("p");
const nodeDuckDuckGo = document.createTextNode("DuckDuckGo is an internet search engine that emphasizes protecting searchers' privacy and avoiding the filter bubble of personalized search results. DuckDuckGo does not show search results from content farms.");
paraDuckDuckGo.appendChild(nodeDuckDuckGo);
//End creating HTML element <p>

//
var inputVisibility = document.querySelector("input");
// Selects Button tag.
var deleteLink = document.querySelector('button');
//
var navButtons = document.querySelectorAll('.navigation button');

//
var element = document.querySelectorAll('article');
//Stores the search engine button class names.
var searchButtons = document.querySelectorAll('.search_engines button');

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

//Search button listener. ADD and DELETE HTML tag <p>.
Array.from(searchButtons).forEach(link => {
  link.addEventListener('click', function(event) {

    if ("node" + event.target.className === "nodeGoogle") {
      if (document.body.contains(document.querySelector(".paraGoogle")) == false) {
        const addButtonGoogle = element[0].appendChild(paraGoogle).classList.add("paraGoogle");
      } else {
        const className = document.querySelectorAll('p.paraGoogle');
        className[0].remove();
      }
    } else if ("node" + event.target.className === "nodeBing") {
      if (document.body.contains(document.querySelector(".paraBing")) == false) {
        const addButtonBing = element[0].appendChild(paraBing).classList.add("paraBing");
      } else {
        const className = document.querySelectorAll('p.paraBing');
        className[0].remove();
      }
    } else if ("node" + event.target.className === "nodeDuckDuckGo") {
      if (document.body.contains(document.querySelector(".paraDuckDuckGo")) == false) {
        const addButtonDuckDuckGo = element[0].appendChild(paraDuckDuckGo).classList.add("paraDuckDuckGo");
      } else {
        const className = document.querySelectorAll('p.paraDuckDuckGo');
        className[0].remove();
      }
    }
  });
});
// Function generator random color.
function randomColor(random){
    var n = random;
    var randomRGB = "rgb(" + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ")" + ":";
    return randomRGB;
}

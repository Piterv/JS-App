//Selects Input tag.
var inputVisibility = document.querySelector("input");
// Selects Button tag.
var deleteLink = document.querySelector('button');
//Stores the search engine buttons tag.
var searchButtons = document.querySelectorAll('.search');
var searchBing = document.querySelector(".search_Bing");
var searchDuckDuckGo = document.querySelector(".search_DuckDuckGo");

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


//Search engine buttoms listener.

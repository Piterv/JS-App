
//jQuery
$('button').click(function(){
  $("h1").css("color", "purple");
  console.log($('h1').attr('style'));
});


//
// //Pure JavaScript
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll('button')[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// }
// // Another JS. way.
// document.querySelectorAll("button").forEach((button) => {
//   button.addEventListener("click", _=>{
//    document.querySelector("h1").style.color = "purple";
//   })
// });

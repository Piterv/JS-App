//jQuery
$('button').on('click', (e)=>{

  console.log(e.target['name']);

  if (e.target['name'] === 'buttonSlide') {
    $('h1').slideToggle();
  }else{
    $('h1').toggleClass('heading', 'addOrRemove');
  }
});

//
// // jQuery
// $('button').click(function() {
//
//   if ($("h1").attr('style') === 'color: purple;') {
//     $("h1").removeAttr("style");
//   } else {
//     $("h1").css("color", "purple");
//   }
// });
//
//
//
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

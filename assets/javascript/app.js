//  Jquery short hand most popular npm ,  can dl the cdn from google dev site, great cause if already loaded locally will be remembered by the users browser
// If you do not put the cdn at end of HTML use

// this code  colors the Hi h! to red when any button is clicked.

// for (i = 0; i < document.querySelectorAll("button").length; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "red";
//   });
// }
// same  code in JQuery
// $("button").click(function() {
//   $("h1").css("color", "red");
// });

// same code keeping the JS in is and css in css  add the css class for styling using jQuery
// $("h1").addClass("big-title margin-50");
// $(button);
//  can use the .hasClass to check and return a true or false
// $(h1).hasClass("margin-50")

$("h1").text("Bye");
// $("button").text("Don't Click Me");
// .html replaces .innerHTML
$("button").html("<em>Hey</em>");

//  $ and . methods , Jquery is just written in vanilla JS and the $ are methods
// using jquery to add or overide the href in the html
$("a").attr("href", "https://www.yahoo.com");

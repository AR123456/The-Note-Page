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

// $("h1").text("Bye");
// // $("button").text("Don't Click Me");
// // .html replaces .innerHTML
// $("button").html("<em>Hey</em>");

// //  $ and . methods , Jquery is just written in vanilla JS and the $ are methods
// // using jquery to add or overide the href in the html
// $("a").attr("href", "https://www.yahoo.com");

// adding event listeners
$("h1").click(function() {
  $("h1").css("color", "purple");
});

// instead of using a for loop to select all the elements can do this.

// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "red";
//   });
// }

// using Jquery
$("button").click(function() {
  $("h1").css("color", "purple");
});

// key press listioner
$(document).keypress(function(event) {
  console.log(event.key);
});

$(document).keypress(function(event) {
  $("h1").text(event.key);
});
// even more robust way use on and then the event as first param
$("h1").on("mouseover", function() {
  $("h1").css("color", "green");
});

$("h1").before("<button>NewBefore</button>");
$("h1").after("<button>NewAfter</button>");
$("h1").prepend(
  "<button>NewPrepend adds inside  just before the h1 closing tag </button>"
);
$("h1").append(
  "<button>NewAppend adds just after but inside the h1 closing tag </button>"
);

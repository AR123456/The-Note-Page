// Monitors the buttons for a click events, fades <img> in response

$("#fade-in").click(function() {
  $("img").fadeIn("fast");
});

$("#fade-out").click(function() {
  $("img").fadeOut(400);
});

$("#toggle-fading").click(function() {
  $("img").fadeToggle("slow");
});
$("#toggle-slide").click(function() {
  $("img").slideToggle("slow");
});
$("#animation").click(function() {
  $("img").animate({
    // can only be things with number value, no change to "red"
    opacity: 0.5
  });
});
$("#chained").click(function() {
  $("img")
    .slideUp("slow")
    .slideDown("slow")
    .fadeOut("slow")
    .fadeIn("slow")
    .animate({
      opacity: 0.5
    });
});

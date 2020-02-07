// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id"); // joe bidens id is "5"
    var newSleep = $(this).data("newsleep"); // currently "false"
    // {sleepy:"false"} - this is how we want to update it.  Note this came out of the HTML so is a string right now
    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    //  /api/cats/5 PUT {sleepy:"false"}
    // handing this off to the catsController
    $.ajax("/api/cats/" + id, {
      // since this is already a string no big deal to concatante a 5 onto it
      type: "PUT",
      data: newSleepState
    }).then(function() {
      console.log("changed sleep to", newSleep);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
      name: $("#ca")
        .val()
        .trim(),
      sleepy: $("[name=sleepy]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newCat
    }).then(function() {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted cat", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

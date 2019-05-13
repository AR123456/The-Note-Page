// this is the ron swanson API "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
// putting the url, and query selctors into vairables
var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var axiosbtn = document.querySelector("#axios");
var display = document.querySelector("#quote");

/////////////////////// XHR //////////////////////////
xhrbtn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var quote = JSON.parse(XHR.responseText)[0];
      display.innerText = quote;
    }
  };
  XHR.open("Get", url);
  XHR.send();
});

/////////////////// fetch//////////////////////

fetchbtn.addEventListener("click", function() {
  fetch(url)
    .then(function(req) {
      req.json().then(function(data) {
        display.innerText = data[0];
      });
    })
    .catch(function() {
      alert("ERROR!");
    });
});

///////////////// jquery ////////////////////
$("#jquery").click(function() {
  $.getJSON(url).done(function(data) {
    $("#quote").text(data[0]);
  });
});

///////////////axios/////////////////////////

axiosbtn.addEventListener("click", function() {
  axios
    .get(url)
    .then(function(res) {
      display.innerText = res.data[0];
    })
    .catch(function() {
      alert("error");
    });
});

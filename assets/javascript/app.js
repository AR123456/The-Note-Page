var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
fetch(url, {
  method: "POST",
  body: JSON.stringify({
    name: "blue",
    login: "bluecat"
  })
})
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data.bpi.EUR.rate);
  });

// fetch(url, {
//   method: "POST",
//   body: "THIS IS THE BODY OF THE POST REQUEST "
// })
//   .then(function(response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data.bpi.EUR.rate);
//   });
// //////////////////////// XHR way //////////////////////

// var btn = document.querySelector("#btn");
// var priceDisp = document.querySelector("#price");
// //listen for clicks
// btn.onclick = function() {
//   var XHR = new XMLHttpRequest();
//   XHR.onreadystatechange = function() {
//     if (XHR.readyState == 4 && XHR.status == 200) {
//       // var url = JSON.parse(XHR.responseText).message;
//       // var price = (document.getElementById("#price").innerHTML =
//       //   XHR.message.bpi.usd.rate_float);
//       var data = JSON.parse(XHR.responseText);
//       var price = data.bpi.USD.rate_float;
//       priceDisp.innerText = price;
//     }
//   };

//   XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
//   XHR.send();
// };

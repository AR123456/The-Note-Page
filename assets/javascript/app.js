//git hub zen API
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  // checking out the ready state
  //   console.log("Ready state is ...." + XHR.readyState);
  if (XHR.readyState == 4) {
    if (XHR.status == 200) {
      console.log(XHR.responseText);
    } else {
      console.log("There was a problem");
    }
  }
};

// what type of request - retriving so get , then the url
XHR.open("GET", "https://api.github.com/zen");
//send it
XHR.send();

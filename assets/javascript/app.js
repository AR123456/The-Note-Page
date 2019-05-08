var btn = document.querySelector("button");
var fullnameDisp = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
btn.addEventListener("click", function() {
  var url = "https://randomuser.me/api/";
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    //putting catch into a function
    .catch(displayErrors);
});
// the handle errors function
function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
}

//putting the rse.json in to a function to make things DRY
function parseJSON(res) {
  return res.json().then(function(parseData) {
    return parseData.results[0];
  });
}
// putting updating the dom into a variabple
function updateProfile(data) {
  var fullname = data.name.first + " " + data.name.last;
  fullnameDisp.innerText = fullname;
  avatar.src = data.picture.medium;
  username.innerText = data.login.username;
  email.innerText = data.email;
  city.innerText = data.location.city;
}
/// putting the catch into a function
function displayErrors(err) {
  console.log("inside displayErrors");
  console.log(err);
}

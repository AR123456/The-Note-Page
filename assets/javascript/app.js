document.getElementById("button1").onclick = function() {
  document.getElementById("facebook").innerHTML = "<p>Facebook.</p>";
  document.getElementById("facebook").style.width = "200px";
  document.getElementById("facebook").style.backgroundColor =
    "rgba( 26, 203, 135)";
};

document.getElementById("button2").ondblclick = function() {
  document.getElementById("apple").innerHTML =
    "<ul><li>Audi</li><li>BMW</li><li>Mercedes</li></ul>";
  document.getElementById("apple").style.fontFamily = "monospace";
  document.getElementById("apple").style.fontSize = "2em";
  document.getElementById("apple").style.backgroundColor = color;
};
var x, y, z, appleColor;
var color = "rgb(18,149,68)";

document.getElementById("button2").onclick = function() {
  x = Math.round(Math.random() * 256);
  y = Math.round(Math.random() * 256);
  z = Math.round(Math.random() * 256);
  appleColor = "rgb(" + x + ", " + y + ", " + z + ")";
  document.getElementById("apple").style.backgroundColor = appleColor;
  document.getElementById("apple").innerHTML = "<p>" + appleColor + "</p>";
};

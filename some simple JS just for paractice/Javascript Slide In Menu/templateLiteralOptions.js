const menu = document.getElementById("menu");
const x = document.getElementById("x");
const container = document.getElementById("container");

const menuHTML = `
<div class="menu-icon" id="menu-icon">&#9776;</div>
`;

const expandedHTML = `
  <div id="expanded">
  <div id="expanded" class="expanded">
  <h2 id="x" class="x">X</h2>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Shop</li>
  </ul>
</div>
  </div>
`;

menu.innerHTML = menuHTML;
container.innerHTML = expandedHTML;

const hamburger = document.getElementById("menu-icon");
const expanded = document.getElementById("expanded");

hamburger.addEventListener("click", function () {
  hamburger.style.visibility = "hidden";
  expanded.style.visibility = "visible";
});

x.addEventListener("click", function () {
  hamburger.style.visibility = "visible";
  expanded.style.visibility = "hidden";
});

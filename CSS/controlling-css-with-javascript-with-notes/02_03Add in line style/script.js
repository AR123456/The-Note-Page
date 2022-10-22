// find the 5th thing in the list and apply style to it
//https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child
// this psudo class matches elements based on their position among a group of siblings

const listItem = document.querySelector(".animals li:nth-child(5) a");

listItem.style.backgroundColor = "orange";

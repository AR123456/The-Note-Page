const listItem = document.querySelector(".animals li:nth-child(5) a");

listItem.style.backgroundColor = "orange";
// styles in the end ar attributes so could use the attribute methods on them.  this is not recommended.
// it could clear out style un intentionaly
listItem.setAttribute("style", "font-style: italic;");

// style gives direct access to each individual property
listItem.style.fontStyle = "italic";

console.log(listItem.getAttribute("style"));

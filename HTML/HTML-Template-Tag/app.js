//  https://blog.webdevsimplified.com/2020-06/template-tag/
const template = document.getElementById("list-item-template");
const list = document.getElementById("list");
const button = document.getElementById("add-item");
// list.children includes th button and template so remove the.
let itemCount = list.children.length - 2;

// console.log(list.children);
// console.log(itemCount);

button.addEventListener("click", () => {
  // take content in li and clone it
  const item = template.content.cloneNode(true);
  itemCount++;
  // change title and content
  item.querySelector(".title").innerText = `Item ${itemCount}`;
  item.querySelector(".content").innerText = `Content ${itemCount}`;
  // add to page
  list.append(item);
});

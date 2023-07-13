function isScrollAtBottom() {
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;
  const scrollPosition =
    window.scrollY || window.scrollX || document.documentElement.scrollTop;
  return scrollPosition > bodyHeight - windowHeight - 100;
}
function loadMoreContent() {
  setTimeout(function () {
    const newContent = document.createElement("div");
    newContent.innerHTML = "<p></p>";
    document.body.appendChild(newContent);
  }, 1000);
}

window.addEventListener("scroll", function () {
  if (isScrollAtBottom()) {
    loadMoreContent();
  }
});

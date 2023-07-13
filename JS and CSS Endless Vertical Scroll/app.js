// a more efficient way to write the isScrollAtBottom function
const isScrollAtBottom = () => {
  const { scrollY, scrollX } = window;
  const scrollPosition =
    scrollY || scrollX || document.documentElement.scrollTop;
  const { clientHeight, scrollHeight } = document.documentElement;
  return scrollPosition > scrollHeight - clientHeight - 100;
};
// function loadMoreContent() {
//   setTimeout(function () {
//     const newContent = document.createElement("div");
//     newContent.innerHTML = "<p></p>";
//     document.body.appendChild(newContent);
//   }, 1000);
// }
const loadMoreContent = () => {
  setTimeout(() => {
    const newContent = document.createElement("div");
    newContent.innerHTML = "<p></p>";
    document.body.appendChild(newContent);
  }, 1000);
};

window.addEventListener("scroll", function () {
  if (isScrollAtBottom()) {
    loadMoreContent();
  }
});

function isScrollAtBottom() {
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;
  const scrollPosition =
    window.scrollY || window.scrollX || document.documentElement.scrollTop;
  return scrollPosition > bodyHeight - windowHeight - 100;
}

window.addEventListener("scroll", function () {
  if (isScrollAtBottom()) {
    loadMoreContent();
  }
});

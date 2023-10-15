//  a JS was to solve since :has() pusdo-class may not be widley supported
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.querySelector('input[type="password"]');

  passwordInput.addEventListener("input", function () {
    if (this.validity.valid && this === document.activeElement) {
      const imgOpen = document.querySelector("img.open");
      imgOpen.style.display = "none";
    }
  });
});

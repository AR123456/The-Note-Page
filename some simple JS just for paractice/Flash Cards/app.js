const card = document.querySelector(".card");

card.addEventListener("click", () => {
  /* Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods. */
  /* The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true. */
  card.classList.toggle("flipped");
});

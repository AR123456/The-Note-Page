document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector("#message-input");

  // btoa encodes
  const encrypted = btoa(input.value);
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});

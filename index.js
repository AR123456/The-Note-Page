document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector("#message-input");

  // btoa encodes
  const codedInput = btoa(input.value);
  document.querySelector("#link-input").value = codedInput;
  console.log(codedInput);
  // atob() decodes
  const decodeInput = atob(codedInput);
  console.log(decodeInput);
});

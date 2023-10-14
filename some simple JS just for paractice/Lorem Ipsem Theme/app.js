// dom elements
const buttons = document.querySelectorAll("button");
const textarea = document.querySelector("textarea");
const output = document.querySelector(".output");

//  themes
const themes = {
  ninja: ["dojo", "shogun", "shinobi", "samuri", "shuriken"],
  pokemon: ["pika", "pokeball", "pokedex", "evolve", "ash", "gym"],
  space: ["universe", "galaxy", "telescope", "comet", "stars"],
};

// functions
const themize = (inputText, theme) => {
  // replace every 3rd word of input text with the words from the tehems array
  const textArray = inputText.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    if (i % 3 === 0) {
      const random = Math.floor(Math.random() * theme.length);
      textArray[i] = theme[random];
    }
  }
  return textArray.join(" ");
};

const updateOutput = (text) => {
  output.textContent = text;
};

// event listener
buttons.forEach((b) => {
  b.addEventListener("click", (e) => {
    console.log(e.target.dataset.theme);
    e.preventDefault();
    if (textarea.value) {
      const t = e.target.dataset.theme;
      const text = themize(textarea.value, themes[t]);
      updateOutput(text);
    }
  });
});

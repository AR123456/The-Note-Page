// dom elements
const buttons = document.querySelectorAll("button");
const textarea = document.querySelector("textarea");
const output = document.querySelector(".output");

//  themes
const themes = {
  flowers: ["Rose", "Tulip", "Sunflower", "Lily", "Daisy"],
  fall: ["Pumpkin", "Autumn Leaves", "Sweater", "Apple", "Cider"],
  space: ["universe", "galaxy", "telescope", "comet", "stars"],
};

// functions
const themize = (inputText, theme) => {
  // make the input text into an array called textArray, based on space between the words

  const textArray = inputText.split(" ");
  // iterate the textArray
  for (let i = 0; i < textArray.length; i++) {
    // ind every 3rd word with modulus 
    if (i % 3 === 0) {
      // get entry from array at random 
      const random = Math.floor(Math.random() * theme.length);
      textArray[i] = theme[random];
    }
  }
  // turn the newly created array back into a string
  return textArray.join(" ");
};

const updateOutput = (text) => {
  // inject it into the COM 
  output.textContent = text;
};

// event listener - determine what the data attribute is
buttons.forEach((b) => {
  b.addEventListener("click", (e) => {
    console.log(e.target.dataset.theme);
    // stop page from re loading
    e.preventDefault();
    // check to see if there is text in the text area
    if (textarea.value) {
      // which button was clicked on and what is its data attribute, dataset property
      const t = e.target.dataset.theme;
      // call function that replaces the 3rd word - pass in the text area value and the theme
      const text = themize(textarea.value, themes[t]);
      updateOutput(text);
    }
  });
});

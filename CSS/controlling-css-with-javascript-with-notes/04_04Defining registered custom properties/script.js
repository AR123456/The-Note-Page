window.CSS.registerProperty({
  name: "--font-size",
  syntax: "<length>",
  inherits: false,
  initialValue: "16px",
});
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Houdini
window.CSS.registerProperty({
  name: "--hue",
  //syntax is the type of value the custom property will capture in its value
  // list of supported names
  syntax: "<integer>",
  inherits: false,
  initialValue: "20",
});

const styleSheet = document.styleSheets[0];
console.log(styleSheet);

console.log(styleSheet.cssRules[4].style.getPropertyValue("--font-size"));

console.log(styleSheet.cssRules[4].styleMap.get("--font-size").value);
console.log(styleSheet.cssRules[4].styleMap.get("--font-size").unit);
// 3em is computationaly dependend a relatvie unit

// path is a node module
const path = require("path");
// the options object - not on the browser runs on computer via node - what is output will be run in the browser
module.exports = {
  // relative path to the entry file the input
  entry: "./src/index.js",
  // specify the absolute URL so use the node dirname property to get the absolute path no matter where it is
  output: {
    // node path.resolve method takes in 2 params the dist foulder
    path: path.resolve(__dirname, "dist"),
    // file name
    filename: "bundle.js"
  }
};

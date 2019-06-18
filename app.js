const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Index Route
app.get("/", (req, res) => {
  //  this variable  title is geing passed into index.hanglebars inside of {{title}}
  const title = "Welcome";
  res.render("index", {
    // title is being passed into view as the scond paramenter of an object
    title: title
  });
});

// About Route
app.get("/about", (req, res) => {
  res.render("about");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

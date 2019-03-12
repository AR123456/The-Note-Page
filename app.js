require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
// https://www.npmjs.com/package/express-session
const passport = require("passport");
//https://www.npmjs.com/package/passport
const passportLocalMongoose = require("passport-local-mongoose");
//https://www.npmjs.com/package/passport-local-mongoose

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// set up the session first - code must be here between app.   stuff and mongoose.connect
app.use(
  session({
    //this will eventualy go to the env file

    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
  })
);
//this method comes bunddled with passport and sets up passport for authentication
app.use(passport.initialize());
// tell app to use passport so set up session
app.use(passport.session());
mongoose.connect("mongodb://localhost:27017/userDB", { useNewURLParser: true });
mongoose.set("useCreateIndex", true);

// create the user DB
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
// tapping in to user schema , adding passportlocalmongoose pluggin which will has and salt passwords and save users into the db

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);
// now passport local configuration

//local stratagie to authenticate using username and password
passport.use(User.createStrategy());
// serialize and de serialize the user (needed for sessions ), basicaly created cooke and puts user ids into it. Deserialize allows passort to access it
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//routes to the front end
app.get("/", function(req, res) {
  res.render("home");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.get("/register", function(req, res) {
  res.render("register");
});
//create the new secrest route for passport
app.get("/secrets", function(req, res) {
  // check to see if user is authenticated, using all the packages we have installed.
  // if user is logged in render secrets page, if not redirect to log in page
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else res.redirect("/login");
});
// adding the logout function
app.get("/logout", function(req, res) {
  //passport docs
  req.logout();
  res.redirect("/");
});

// adding route for submit of name and email on the form on the front end.
app.post("/register", function(req, res) {
  //set up for passport- passport local mongoose
  //https://www.npmjs.com/package/passport-local-mongoose
  // register user - from the passport local mongoooe package
  User.register({ username: req.body.username }, req.body.password, function(
    err,
    user
  ) {
    if (err) {
      console.log(err);
      res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, function() {
        // sucesses setting cookie of current logged in session
        // send to the secrets route
        res.redirect("/secrets");
      });
    }
  });
});
app.post("/login", function(req, res) {
  //set up for passport
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  // user passport to log the user in and authenticate them
  // passport log in function - call on req object

  req.login(user, function(err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/secrets");
      });
    }
  });
});
//starting up the server
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

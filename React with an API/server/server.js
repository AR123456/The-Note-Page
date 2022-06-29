const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
// just posting a simple login application
app.post("/login", (req, res) => {
  // pass the code up in the req.body
  const code = req.body.code;
  // creating a class here- these should be in a .env
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "",
    clientSecret: "",
  });
});

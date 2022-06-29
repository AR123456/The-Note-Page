const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(bodyParser.json());
// just posting a simple login application
app.post("/login", (req, res) => {
  // pass the code up in the req.body
  const code = req.body.code;
  // creating a class here- these should be in a .env
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "a3856d12aaac4e8490ecb4268d2fa21b",
    clientSecret: "5d2d39db580c4cc1b3bf7f74851fea99",
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(3001);

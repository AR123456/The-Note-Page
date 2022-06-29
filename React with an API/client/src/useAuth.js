import React, { useEffect, useState } from "react";
import axios from "axios";
// custom hook
const useAuth = (code) => {
  // state for all of the things we are returning from server when we log in ... ;
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  // To get the accessToken,refreshToken and expiresIn
  useEffect(() => {
    axios
      // posting to the server hard coded for now
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        // console.log(res.data);
        setAccessToken(res.data.accessToken);
        // so user dosent have to re log in
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        // removes the code from the url and sends us back to /
        window.history.pushState({}, null, "/");
      })
      // to code exp quickly so redirect to login to get a new access token
      .catch(() => {
        window.location = "/";
      });
  }, [code]);
  // this use effect is refreshing the token
  useEffect(() => {
    // if there is no refresh token or expires in dont run this code
    if (!refreshToken || !expiresIn) return;
    // using set time out so that we only do this right before the token expires
    // const timeout = setTimeout(() => {
    //make this a setInterval so that it runs more than once
    const interval = setInterval(() => {
      // put the whole axios call in here
      // pointing to route on server
      axios
        // posting to the server hard coded for now
        .post("http://localhost:3001/refresh", {
          // pass in refresh token
          refreshToken,
        })
        .then((res) => {
          // console.log(res.data);
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
        })
        // to code exp quickly so redirect to login to get a new access token
        .catch(() => {
          window.location = "/";
        });
      // in the set time out run this one min before token expires
    }, (expiresIn - 60) * 1000);
    // if for some reason we have error clear the set time out
    // return () => clearTimeout(timeout);
    // changeing to clearInterval
    return () => clearInterval(interval);

    // when ever the refreshToke, or expiresIn changes run this useEffecr
  }, [refreshToken, expiresIn]);

  // need accessToken to call any of the spotify APIs
  return accessToken;
};

export default useAuth;

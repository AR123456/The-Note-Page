import React from "react";
import { Container } from "react-bootstrap";

// note this should be my client id kyle says this is public so no need to hide, this is his ID
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=a3856d12aaac4e8490ecb4268d2fa21b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
const Login = () => {
  return (
    <Container
      className="d-flex justify-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a href={AUTH_URL} className="btn btn-success btn-lg">
        Login With Spotify
      </a>
    </Container>
  );
};

export default Login;

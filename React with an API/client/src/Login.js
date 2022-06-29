import React from "react";
import { Container } from "react-bootstrap";

// note this should be my client id kyle says this is public so no need to hide, this is his ID
const AUTH_URL = "3";
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

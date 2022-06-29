import React from "react";
import { Container } from "react-bootstrap";

// note this should be my client id kyle says this is public so no need to hide, this is his ID
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
const Login = () => {
  return (
    <Container>
      <h2>Login</h2>
    </Container>
  );
};

export default Login;

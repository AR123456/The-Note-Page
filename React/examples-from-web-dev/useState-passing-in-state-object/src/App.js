import React, { useState } from "react";

import { Container, Row, Card, Button, Col } from "react-bootstrap";
function App() {
  // hooks must execute in the same order- dont put in an if statement or inside of functions or loops, must be at the top level of the function and always called in the same order
  // use state returns an array with 2 values the current state and a function that can update state
  // this will run everytime state is updated
  // passing in an object works a little diffrently - make sure that you spread into return so you do not lose all the bits
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState((prevState) => {
      // this overwrites state so when you click theme will disappear
      // be sure to spread prev state
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  function incrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  return (
    <>
      {/* https://stackoverflow.com/questions/64383263/how-do-i-get-a-react-bootstrap-card-to-center-vertically */}
      <Container className="d-flex vh-100">
        <Row className="m-auto align-self-center">
          <Col>
            <Card>
              <Button onClick={decrementCount}>-</Button>
              <span> {count}</span>
              <span>{theme}</span>
              <Button onClick={incrementCount}>+</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

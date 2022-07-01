import React, { useState } from "react";

import { Container, Row, Card, Button, Col } from "react-bootstrap";
function App() {
  // hooks must execute in the same order- dont put in an if statement or inside of functions or loops, must be at the top level of the function and always called in the same order
  // use state returns an array with 2 values the current state and a function that can update state
  // this will run everytime state is updated
  // passing in multiple parts of state
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
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

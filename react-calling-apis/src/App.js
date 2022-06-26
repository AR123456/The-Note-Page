import React, { useState } from "react";
import useFetchDrugs from "./useFetchDrugs";
import { Container } from "react-bootstrap";

function App() {
  // put the params into state
  const [params, setParams] = useState({});
  const { drugs, loading, error } = useFetchDrugs();

  return (
    <Container className="App">
      {loading && <h1>Loading...</h1>}
      {error && <h2>Error... try refreshing </h2>}

      {/* <h1>{drugs.length}</h1> */}
      {drugs.map((drug) => {
        return (
          <div key={10} drug={drug}>
            {drug.results[0]}
          </div>
        );
      })}
    </Container>
  );
}

export default App;

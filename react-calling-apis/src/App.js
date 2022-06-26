import useFetchDrugs from "./useFetchDrugs";
import { Container } from "react-bootstrap";

function App() {
  const { drugs, loading, error } = useFetchDrugs();
  console.log(drugs);
  return (
    <Container className="App">
      {loading && <h1>Loading...</h1>}
      {error && <h2>Error... try refreshing </h2>}

      <h1>{drugs.length}</h1>
    </Container>
  );
}

export default App;

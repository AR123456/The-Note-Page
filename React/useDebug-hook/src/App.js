import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [firstName, setFirstName] = useLocalStorage("");
  // const [firstName, setFirstName] = useLocalStorage("firstName", "Anne");
  const [lastName, setLastName] = useState("Smith");
  return (
    <div className="App">
      hello First:{}
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <br />
      Last:{}
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></input>
    </div>
  );
}

export default App;

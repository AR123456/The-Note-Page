import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
// getting token from url
const code = new URLSearchParams(window.location.search).get("code");

// function App() {
//   return (
//     <div className="App">
//       code ? <Dashboard code={code}></Dashboard> : <Login></Login>
//       <Login />
//     </div>
//   );
// }

function App() {
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;

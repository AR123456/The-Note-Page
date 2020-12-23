import React, {  useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { ThemeContext } from "./contexts/ThemeContext";


function Navbar() {
  // can use the useContext hook as many times as we would like in to consume different contexts 
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged in " : "logged out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;

///////////////////  this class component refactored into a functional component

// import React, { Component } from "react";
// import { AuthContext } from "./contexts/AuthContext";
// import { ThemeContext } from "./contexts/ThemeContext";
// // can use the useContext hook as many times as we would like in
// /
// class Navbar extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {/* Context Consumber needs a function getting access to the data inside the function, no need for the this   */}
//             {(themeContext) => {
//               // destructureing  authContext
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               //now return some jxs
//               return (
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1>Context App</h1>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? "Logged in " : "logged out"}
//                   </div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default Navbar;

import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {/* Context Consumber needs a function getting access to the data inside the function, no need for the this   */}
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          //now return some jxs
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;

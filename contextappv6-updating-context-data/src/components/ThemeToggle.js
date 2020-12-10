import React, { Component } from "react";

// consume the context to get access to the toggle function
import { ThemeContext } from "./contexts/ThemeContext";
// this component outputs a button to toggle the theme

class ThemeToggle extends Component {
  // will use the state from theme context
  // consume the context to get access to the toggle function
  static contextType = ThemeContext;
  render() {
    // destucture then pass into onClick, then goto App.js to render
    const { toggleTheme } = this.context;
    return (
      <div>
        <button onClick={toggleTheme}>Toggle the theme</button>
      </div>
    );
  }
}

export default ThemeToggle;

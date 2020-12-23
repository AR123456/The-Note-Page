import React, { createContext, Component } from "react";
export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  // the function to toggle needs to live inside tis class, may want to pass to other components
  // to change the theme
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  // the function to toggle theme
  toggleTheme = () => {
    // update the state , make opposite of what it already is
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    // now the them toggle inside the provider changes, prop in state
    // passing the propertie  this.toggelTheme
    // now any component that consumes this context has access
    // goto ThemeToggle.js
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

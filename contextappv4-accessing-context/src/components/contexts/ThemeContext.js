import React, { createContext, Component } from "react";
export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  render() {
    //   This return contains the ThemeContext provider type
    // whenever we create a contexts give it Provider
    //This is what wraps component so that the data can be used inside
    // also needs value propertuy- the value property takes in whatever data we want to
    // provide to the compoents we are wrapping. An object of properties that we have inside of state
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

import React, { Component, createContext } from "react";
export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  };
  toggleAuth = () => {
    // set to opposit of what is in state
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };
  render() {
    return (
      <div>
        <AuthContext.Provider
          // passing in the toggleAuth function we want to share
          value={{ ...this.state, toggleAuth: this.toggleAuth }}
        >
          {/* nest the components we want to supply this state or function to */}
          {this.props.children}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default AuthContextProvider;

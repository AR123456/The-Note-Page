import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./components/contexts/ThemeContext";
// import ThemeToggle to render in App.js
import ThemeToggle from "./components/ThemeToggle";
// import AuthContext
import AuthContextProvider from "./components/contexts/AuthContext";
import BookContextProvider from "./components/contexts/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        {/* wrap Navbar, BookList and themeToggle with AuthContext provider  */}
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

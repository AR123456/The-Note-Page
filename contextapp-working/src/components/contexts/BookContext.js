import React, { createContext, useState } from "react";
export const BookContext = createContext();
// take in props as a paramiter
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "book1", id: 1 },
    { title: "book2", id: 2 },
    { title: "book3", id: 3 },
    { title: "book4", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
//  then import into app.js and consume in BookList.js

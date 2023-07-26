import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
function App() {
  const [additem, setAdditem] = useState([]);

  function addNote(note) {
    setAdditem((prevData) => {
      return [...prevData, note];
    });
  }

  function onDelete(id) {
    setAdditem((prevData) => {
      return prevData.filter((currData, indx) => {
        return indx !== id;
      });
    });
  }

  return (
    <>
      <Header />

      <CreateNote passNote={addNote} />
      {additem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;

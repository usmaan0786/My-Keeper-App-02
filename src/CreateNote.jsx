import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function addEvent(event) {
    event.preventDefault();

    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function InputEvent(event) {
    // const value = event.target.value;
    // const name = event.target.name;
    // event.preventDefault();

    const { name, value } = event.target;

    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });

    // console.log(note);
  }
  return (
    <>
      <form className="create-note">
        <input
          name="title"
          value={note.title}
          onChange={InputEvent}
          type="text"
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={InputEvent}
          rows=""
          column=""
          placeholder="Write a note ...."
        ></textarea>
        <button onClick={addEvent}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>  
    </>
  );
}

export default CreateNote;

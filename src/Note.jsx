import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Note(props) {
  function deleteNote(event) {
    event.preventDefault();
    props.deleteItem(props.id);
  }
  return (
    <>
      <form className="note">
        <h1> {props.title}</h1>
        <br />
        <p>{props.content} </p>
        <button onClick={deleteNote}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </form>
    </>
  );
}

export default Note;

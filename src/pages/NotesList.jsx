import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function NoteList() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.log("Error fetching notes:", err));
  }, []);

  function handleNoteClick(note) {
    setSelectedNote(note);
  }

  function handleDeleteNote(id) {
    fetch(`http://localhost:3001/notes/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setNotes(notes.filter((note) => note.id !== id));
        setSelectedNote(null);
      })
      .catch((err) => console.log("Error deleting note:", err));
  }

  function getFirstThreeWords(text) {
    if (!text) return "";
    const words = text.split(" ");
    const firstThreeWordsArray = words.slice(0, 3);
    const firstThreeWords = firstThreeWordsArray.join(" ");
    if (words.length > 3) {
      return firstThreeWords + "...";
    }
    return firstThreeWords;
  }

  let noteDetails;
  if (selectedNote === null) {
    noteDetails = <p>Select a note to view details</p>;
  } else {
    noteDetails = (
      <div className="card bg-light position-relative">
        
        <button
          className="border-0 bg-transparent position-absolute"
          style={{
            top: "0px",
            left: "688px",
            width: "36px",
            height: "36px",
            fontSize: "20px",
           
            padding: 0,
            
          }}
          onClick={() => handleDeleteNote(selectedNote.id)}
        >
          &times;
        </button>

        <div className="card-body">
          <h5 className="card-title">Note Content</h5>
          <p className="card-text">{selectedNote.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
    

      <div className="container fluid d-flex">
        {/* Notes list */}
        <div style={{ flex: 1, marginRight: "5px" }}>
          <ul className="list-group">
            {notes.map((note) => (
              <li
                key={note.id}
                className="list-group-item list-group-item-action border-0 shadow-sm bg-light"
                style={{ cursor: "pointer" }}
                onClick={() => handleNoteClick(note)}
              >
                {getFirstThreeWords(note.text)}
              </li>
            ))}
          </ul>
        </div>

        {/* Note detail display */}
        <div style={{ flex: 2, padding: "10px", borderLeft: "1px solid #ddd" }}>
          {noteDetails}
        </div>
      </div>
    </div>
  );
}

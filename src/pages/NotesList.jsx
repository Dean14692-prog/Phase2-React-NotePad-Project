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

  // Handle note click
  function handleNoteClick(note) {
    setSelectedNote(note);
  }

  // Get the first 3 words of the note text
  function getFirstThreeWords(text) {
    if (!text) return "";

    const words = text.split(" ");
    const firstThreeWordsArray = words.slice(0, 3);
    const firstThreeWords = firstThreeWordsArray.join(" ");

    return words.length > 3 ? firstThreeWords + "..." : firstThreeWords;
  }

  // Format date and time
  function showDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    return date.toLocaleString();
  }

  return (
    <div>
      <NavBar />
      <h2 className="text-center">Notes</h2>

      <div className="container fluid d-flex">
        {/* Notes list */}
        <div style={{ flex: 1, marginRight: "10px" }}>
          <ul className="list-group">
            {notes.map((note) => (
              <li
                key={note.id}
                className="list-group-item list-group-item-action border-0"
                style={{ cursor: "pointer" }}
                onClick={() => handleNoteClick(note)}
              >
                <div className="fw-bold">{showDateTime(note.date)}</div>
                {getFirstThreeWords(note.text)}
              </li>
            ))}
          </ul>
        </div>

        {/* Note detail display */}
        <div style={{ flex: 2, padding: "10px", borderLeft: "1px solid #ddd" }}>
          {selectedNote ? (
            <div className="card">
              <div className="card-header">
                <strong>Created At:</strong> {showDateTime(selectedNote.date)}
              </div>
              <div className="card-body">
                <h5 className="card-title">Note Content</h5>
                <p className="card-text">{selectedNote.text}</p>
              </div>
            </div>
          ) : (
            <p>Select a note to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

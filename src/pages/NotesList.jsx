import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function NoteList() {
  const [notes, setNotes] = useState([]); // All notes from server
  const [selectedNote, setSelectedNote] = useState(null); // Selected note

  // Fetch notes from JSON server
  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  // Function to get the first 3 words of the note text
  function getFirstThreeWords(text) {
    const words = text.split(" ");
    const firstThreeWords = words.slice(0, 3).join(" ");
    return words.length > 3 ? firstThreeWords + "..." : firstThreeWords;
  }

  // When user clicks on a note
  function handleNoteClick(note) {
    setSelectedNote(note);
  }

  // Format date to something readable
  function showDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    return date.toLocaleString(); // Example: "4/21/2025, 10:15:00 AM"
  }

  return (
    <div>
      <NavBar />
      <h1 className="text-center mt-4">Notes</h1>

      <div className="container mt-4 d-flex">
        {/* Left side: Note list */}
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => (
                <tr
                  key={note.id}
                  onClick={() => handleNoteClick(note)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{note.id}</td>
                  <td>{getFirstThreeWords(note.text)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right side: Selected note display */}
        <div style={{ flex: 2, padding: "20px", borderLeft: "1px solid #ddd" }}>
          {selectedNote ? (
            <div className="card">
              <div className="card-header">
                <strong>Note ID:</strong> {selectedNote.id}
              </div>
              <div className="card-body">
                <h5 className="card-title">Note Content</h5>
                <p className="card-text">{selectedNote.text}</p>
                {/* Date and time display */}
                <p className="text-muted">
                  <strong>Created At:</strong> {showDateTime(selectedNote.date)}
                </p>
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

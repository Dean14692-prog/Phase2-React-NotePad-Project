import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function NoteList() {
  const [notes, setNotes] = useState([]); // State to store notes
  const [selectedNote, setSelectedNote] = useState(null); // State to store selected note

  // Fetch notes from the server
  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setNotes(data)) // Store the notes in state
      .catch((error) => console.error("Error:", error)); // Catch errors
  }, []); // Runs once when the component loads

  // Handle note click
  const handleNoteClick = (note) => {
    setSelectedNote(note); // Set the selected note when clicked
  };

  // Function to get the first 3 words of the note text
function getFirstThreeWords(text) {
  const words = text.split(" "); // Split the text into an array of words
  const firstThreeWords = words.slice(0, 3).join(" "); // Join the first 3 words

  // If there are more than 3 words, add "..."
  if (words.length > 3) {
    return firstThreeWords + "...";
  }

  return firstThreeWords; 
}



  return (
    <div>
      <NavBar />
      <h1 className="text-center mt-4">Notes</h1>
      <div className="container mt-4 d-flex">
        {/* List of Notes */}
        <div
          className="list-container"
          style={{ flex: 1, paddingRight: "20px" }}
        >
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Note</th>
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
                  <td>{getFirstThreeWords(note.text)}</td>{" "}
                  {/* Display only the first three words */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Display the selected note */}
        <div
          className="note-display-container"
          style={{ flex: 2, padding: "20px", borderLeft: "1px solid #ddd" }}
        >
          {selectedNote ? (
            <>
              <h4>Selected Note</h4>
              <p>
                <strong>ID:</strong> {selectedNote.id}
              </p>
              <p>
                <strong>Text:</strong> {selectedNote.text}
              </p>
            </>
          ) : (
            <p>Select a note to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

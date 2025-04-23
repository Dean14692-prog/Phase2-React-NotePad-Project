import React, { useEffect, useState } from "react";
import NavBarNotes from "../components/NotesNavBar";

export default function NoteList() {
  // State to store the list of notes, selected note, and search term
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetching the notes data from the backend API on initial render
  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data)) // Setting the fetched notes in state
      .catch((err) => console.log("Error fetching notes:", err)); // Handle errors
  }, []);

  // Handling the search input change to update the searchTerm state
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handling note click to set the selected note in state
  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  // Handling the deletion of a note by making a DELETE request
  const handleDeleteNote = (id) => {
    fetch(`http://localhost:3001/notes/${id}`, {
      method: "DELETE", // DELETE request to remove the note
    })
      .then(() => {
        // Updating the notes state after deleting the note
        setNotes(notes.filter((note) => note.id !== id));
        setSelectedNote(null); // Deselecting the note after deletion
      })
      .catch((err) => console.log("Error deleting note:", err)); // Handle errors
  };

  // Utility function to get the first three words of the note text
  const getFirstThreeWords = (text) => {
    if (!text) return ""; // Return an empty string if no text is provided
    const words = text.split(" ");
    const firstThree = words.slice(0, 3).join(" ");
    return words.length > 3 ? firstThree + "..." : firstThree; // Return first three words or full text
  };

  // Filtering the notes based on the search term (case-insensitive)
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        {/* Passing searchTerm and onSearchChange function to NavBarNotes component */}
        <NavBarNotes
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
      </div>

      <div className="container-fluid d-flex mt-3 ps-3 border-start">
        {/* Notes List */}
        <div className="w-25 pe-2">
          <ul className="list-group shadow-sm border bg-light">
            {/* Iterating through filtered notes to display in a list */}
            {filteredNotes.map((note) => (
              <li
                key={note.id}
                className="list-group-item list-group-item-action list-group-item-light"
                style={{ cursor: "pointer" }}
                onClick={() => handleNoteClick(note)} // Handle click on a note
              >
                {getFirstThreeWords(note.text)}{" "}
                {/* Display first three words of note text */}
              </li>
            ))}
          </ul>
        </div>

        {/* Note Details */}
        <div className="w-75 ps-3 border-start">
          {selectedNote ? (
            <div className="card bg-light position-relative shadow-sm">
              {/* Button to delete selected note */}
              <button
                className="btn position-absolute top-0 end-0  fs-4"
                style={{ border: "none", background: "none" }}
                onClick={() => handleDeleteNote(selectedNote.id)} // Handle note deletion
              >
                &times; {/* Close button (X) */}
              </button>

              <div className="card-body">
                <h5 className="card-title">Note Content</h5>
                <p className="card-text">{selectedNote.text}</p>{" "}
                {/* Display selected note content */}
              </div>
            </div>
          ) : (
            <div className="text-muted mt-3">Select a note to view details</div>
          )}
        </div>
      </div>
    </div>
  );
}

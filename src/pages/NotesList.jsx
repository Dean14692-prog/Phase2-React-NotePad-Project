import React, { useEffect, useState } from "react";
import NavBarNotes from "../components/NotesNavBar";

export default function NoteList() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.log("Error fetching notes:", err));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleDeleteNote = (id) => {
    fetch(`http://localhost:3001/notes/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setNotes(notes.filter((note) => note.id !== id));
        setSelectedNote(null);
      })
      .catch((err) => console.log("Error deleting note:", err));
  };

  const getFirstThreeWords = (text) => {
    if (!text) return "";
    const words = text.split(" ");
    const firstThree = words.slice(0, 3).join(" ");
    return words.length > 3 ? firstThree + "..." : firstThree;
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBarNotes
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <div className="container fluid d-flex">
        <div style={{ flex: 1, marginRight: "5px" }}>
          <ul className="list-group">
            {filteredNotes.map((note) => (
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

        <div style={{ flex: 2, padding: "10px", borderLeft: "1px solid #ddd" }}>
          {selectedNote ? (
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
          ) : (
            <p>Select a note to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

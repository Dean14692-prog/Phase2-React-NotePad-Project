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

      <div className="container-fluid d-flex mt-3">
        {/* Notes List */}
        <div className="w-25 pe-2">
          <ul className="list-group shadow-sm">
            {filteredNotes.map((note) => (
              <li
                key={note.id}
                className="list-group-item list-group-item-action"
                style={{ cursor: "pointer" }}
                onClick={() => handleNoteClick(note)}
              >
                {getFirstThreeWords(note.text)}
              </li>
            ))}
          </ul>
        </div>

        {/* Note Details */}
        <div className="w-75 ps-3 border-start">
          {selectedNote ? (
            <div className="card bg-light position-relative shadow-sm">
              {/* Delete X button */}
              <button
                className="btn position-absolute top-0 end-0 fs-4"
                style={{ border: "none", background: "none" }}
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
            <div className="text-muted mt-3">Select a note to view details</div>
          )}
        </div>
      </div>
    </div>
  );
}

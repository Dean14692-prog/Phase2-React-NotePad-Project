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

function handleDownloadNote(note) {
  // Create a new text file from the note's text
  const file = new Blob([note.text], { type: "text/plain" });

  // Create an anchor element to trigger the download
  const link = document.createElement("a");

  // Create a link to the file we just created
  link.href = URL.createObjectURL(file);

  // Set the name of the file to be downloaded
  link.download = `Note-${note.id}.txt`;

  // Trigger the download
  link.click();
}


  // Function to get the first 3 words of the note text
  function getFirstThreeWords(text) {
    if (!text) return ""; // Return an empty string if text is undefined, null, or empty

    const words = text.split(" "); // Split the text into an array of words

    // Slice the first 3 words from the array
    const firstThreeWordsArray = words.slice(0, 3);

    // Join the first 3 words with a space
    const firstThreeWords = firstThreeWordsArray.join(" ");

    // If there are more than 3 words, add "..."
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
      <div className="card bg-light">
        <div className="card-header d-flex justify-content-start align-items-center">
          <div>
            <button
              className="btn btn-sm btn-danger rounded-circle p-3"
              onClick={() => handleDeleteNote(selectedNote.id)}
              style={{
                fontSize: "20px",
                lineHeight: "1",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              &times;
            </button>
            <button
              className="btn btn-sm btn-primary ms-2"
              onClick={() => handleDownloadNote(selectedNote)}
            >
              Download
            </button>
          </div>
        </div>
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

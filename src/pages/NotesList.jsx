import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function NoteList() {
  const [notes, setNotes] = useState([]); // State to store notes

  // Fetch notes from the server
  useEffect(() => {
    fetch("http://localhost:3001/notes") 
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setNotes(data)) // Store the notes in state
      .catch((error) => console.error("Error:", error)); // Catch errors
  }, []); // Runs once when the component loads

  return (
    <div>
      <NavBar />
      <h1 className="text-center mt-4">Notes</h1>
      <div className="container mt-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => (
              <tr key={note.id}>
                <td>{note.id}</td>
                <td>{note.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

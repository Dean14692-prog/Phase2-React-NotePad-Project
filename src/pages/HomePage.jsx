import React, { useState } from "react";
import NavBar from "../components/NavBar";

export default function NoteArea() {
  const [note, setNote] = useState("");

  async function handleSend() {
    if (!note.trim()) {
      return; // Don't send if the note is empty
    }

    try {
      await fetch("http://localhost:3001/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: note }),
      });

      setNote(""); // Clear note after sending
    } catch (error) {
      console.log("Error saving note:", error);
    }
  }

  return (
    <div>
      <NavBar />
      <div
        className="d-flex justify-content-center align-items-start vh-100"
        style={{ paddingTop: "15vh" }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="text-center mb-4 fw-bold">New Note.</h2>

          <div
            className="card shadow-sm border bg-white"
            style={{ borderRadius: "30px" }}
          >
            <div className="card-body d-flex align-items-center gap-2 flex-wrap">
              {/* Note input */}
              <input
                type="text"
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className="form-control border-0 shadow-none flex-grow-1"
                placeholder="Note anything"
                style={{ minWidth: "180px" }}
              />

              {/* Attachment button */}
              <button
                className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "40px", height: "40px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "30px", height: "30px" }}
                  fillRule="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </button>

              {/* Quote button */}
              <button className="btn btn-light rounded-pill d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fillRule="currentColor"
                  className="bi bi-globe"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "4px" }}
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                </svg>
                Quote
              </button>

              <div className="ms-auto d-flex align-items-center gap-2">
                {/* Send Button */}
                <button
                  onClick={handleSend}
                  className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px", color: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-arrow-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

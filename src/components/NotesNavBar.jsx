import React from "react";

export default function NavBarNotes({ searchTerm, onSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-2 sticky-top shadow-sm">
      <a className="navbar-brand fw-bold" href="/">
        MyApp
      </a>

      <div className="collapse navbar-collapse justify-content-end">
        <form className="d-flex" role="search">
          <div className="position-relative">
            <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 
                3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.656a5.5 
                5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"
                />
              </svg>
            </span>
            <input
              className="form-control ps-5"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              value={searchTerm}
              onChange={onSearchChange}
              style={{ width: "250px" }}
            />
          </div>
        </form>
      </div>
    </nav>
  );
}

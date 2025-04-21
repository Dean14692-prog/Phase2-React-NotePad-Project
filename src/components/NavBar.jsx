import React from "react";
import { Link } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

export default function NavBar() {
  // Create popover content for each link
  const homePopover = (
    <Popover id="notes-list-popover">
      <Popover.Header>Landing Page</Popover.Header>
    </Popover>
  );

  const notesListPopover = (
    <Popover id="notes-list-popover">
      <Popover.Header>Notes List</Popover.Header>
    </Popover>
  );

  const noteAreaPopover = (
    <Popover id="notes-list-popover">
      <Popover.Header>New Note</Popover.Header>
    </Popover>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container-fluid px-3">
          {/* Home Link with Popover */}
          <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={homePopover}
          >
            <Link
              to="/landing"
              className="nav-link d-inline-block me-3 p-2 rounded hover-shadow btn btn-light d-flex align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </Link>
          </OverlayTrigger>

          {/* Notes List Link with Popover */}
          <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={notesListPopover}
          >
            <Link
              to="/notes"
              className="nav-link d-inline-block me-3 p-2 rounded hover-shadow btn btn-light d-flex align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-file-earmark-text"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg>
            </Link>
          </OverlayTrigger>

          {/* Note Area Link with Popover */}
          <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={noteAreaPopover}
          >
            <Link
              to="/home"
              className="nav-link d-inline-block me-3 p-2 rounded hover-shadow btn btn-light d-flex align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-book"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
              </svg>
            </Link>
          </OverlayTrigger>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#download">
                  Download
                </a>
              </li>
              <li className="nav-item ms-lg-3">
                <button
                  className="btn btn-warning rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "38px", height: "38px" }}
                >
                  DE
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

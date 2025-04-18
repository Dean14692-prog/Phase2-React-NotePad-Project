import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold text-dark" to="/">
            SimpleNote
          </Link>
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
                <a className="nav-link text-dark" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#download">
                  Download
                </a>
              </li>
              <li className="nav-item ms-lg-3">
                <Link className="btn btn-outline-dark btn-sm" to="/signin">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from "react";

export default function LandingPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="/home/dean/Moringa/Phase2/notepad-app/src/image/Screenshot From 2025-04-18 19-40-41.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          NotePad
        </a>
      </nav>

      {/* Main Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Column: Text Content */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold text-primary mb-3">NotePad</h1>
            <h2 className="fw-semibold mb-3">Simple. Powerful. Organized.</h2>
            <p className="mb-4">
              Your thoughts, neatly captured and always accessible.
            </p>
            <button className="btn btn-primary rounded-pill px-4">
              Start Noting
            </button>
          </div>

          <div className="col-md-6">
            <div className="position-relative">
              <img
                src="https://ae01.alicdn.com/kf/S5fa6371d1ccd4f69bc705d9a32864792M.jpg_640x640q90.jpg"
                alt="Notepad"
                className="img-fluid rounded-4 shadow-sm"
                style={{
                  objectFit: "cover",
                  maxHeight: "300px",
                  width: "100%",
                }}
              />
              <div className="mt-3">
                <p className="text-secondary small">
                  Every idea begins as a note captured in a moment, refined with
                  intention, and built into something extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container-fluid bg-light py-5">
        <div className="container">
          <div className="mb-4 d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
            <a
              href="https://www.apple.com/app-store/"
              className="btn btn-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Store
            </a>
            <a
              href="https://play.google.com/store"
              className="btn btn-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>
          </div>

          <div className="text-center text-muted mb-3">&copy; NotePad</div>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <a href="/about" className="text-secondary text-decoration-none">
              About
            </a>
            <a href="/privacy" className="text-secondary text-decoration-none">
              Privacy
            </a>
            <a href="/features" className="text-secondary text-decoration-none">
              Features
            </a>
            <a href="/report" className="text-secondary text-decoration-none">
              Report Abuse
            </a>
          </div>

          <div className="text-center text-secondary px-3 px-md-5">
            <p>
              Every great idea starts with a note. Welcome to this digital
              workspace where you shape your plans, capture insights, and stay
              ahead with clarity and intention.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

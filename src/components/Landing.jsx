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

          {/* Right Column: Card */}
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
                  <i className="bi bi-stars text-danger me-2"></i>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container py-4 mt-5 bg-light">
        <div className="d-flex align-items-center">
          <a href="#" className="text-secondary text-decoration-none ms-4">
            Privacy & Terms
          </a>
        </div>
      </footer>
    </>
  );
}

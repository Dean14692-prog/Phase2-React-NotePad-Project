export default function Footer () {
    return (
       <>
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
            <a href="/features" className="text-secondary text-decoration-none">
              Features
            </a>
            <a href="/abuse" className="text-secondary text-decoration-none">
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
     
    )
}
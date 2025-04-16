import React from "react";

export default function NoteArea() {
  return (
    <div
      className="d-flex justify-content-center pb-5"
      style={{ marginTop: "190px" }}
    >
      <div className="form-group text-center w-75">
        <h3
          className="mb-3 ml-5"
          style={{
            fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
            fontWeight: "600",
            fontSize: "30px",
            fontStyle: "normal",
            lineHeight: "28px",
            color: "#000000",
          }}
        >
          What is in your mind?
        </h3>
        <div className="d-flex justify-content-center">
          <textarea
            className="form-control rounded-5"
            rows="6"
            style={{ maxWidth: "750px", height: "100px" }}
            placeholder="Pen down your thoughts"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

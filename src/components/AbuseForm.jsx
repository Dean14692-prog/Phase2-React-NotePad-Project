import { useState } from "react";
import NavBar from "/home/dean/Moringa/Phase2/notepad-app/src/components/NavBar.jsx";

export default function AbuseReport() {
  // State to manage form data input by the user (name, email, abuse type, description)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  // Function to handle input changes in the form (name, email, abuseType, description)
  function handleChange(events) {
    const { name, value } = events.target; // Destructuring name and value from the event target (input field)
    setFormData((formData) => ({
      // Updating the state of formData by spreading previous values and changing the specific field
      ...formData,
      [name]: value, // Updating the specific field based on the name attribute
    }));
  }

  // Function to handle form submission
  async function handleSubmit(events) {
    events.preventDefault(); // Preventing the default form submission behavior (page reload)
    try {
      // Sending a POST request to submit the form data to the server
      const response = await fetch("http://localhost:3001/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Converting form data into JSON format and sending it in the request body
      });
      //clearing the form data inputs
      setFormData({
        name: "",
        email: "",
        description: "",
      });
    } catch (error) {
      alert("Error submitting report. Please try again."); // Show alert
    }
  }

  let buttonText = "Submit Report"; // Default button text

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h2 className="h4 mb-0">Report Abuse</h2>
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange} // Handle change for 'name' input field
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange} // Handle change for 'email' input field
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange} // Handle change for 'description' textarea
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-danger">
                    {buttonText}
                  </button>
                </form>
              </div>

              <div className="card-footer text-muted">
                Reports are confidential and will be reviewed within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import NoteList from "./pages/NotesList";
import NoteArea from "./pages/HomePage";


export default function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/notes" element={<NoteList />} />
        <Route path="/home" element={<NoteArea />} />
      </Routes>
    </div>
  );
}

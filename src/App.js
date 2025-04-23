// App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import NoteList from "./pages/NotesList";
import NoteArea from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import AbuseReport from "./components/AbuseForm";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/notes" element={<NoteList />} />
        <Route path="/home" element={<NoteArea />} />
        <Route path="/abuse" element={<AbuseReport />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

import './App.css';
import NoteArea from './components/Content';
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <NoteArea />
      </div>
    </div>
  );
}

export default App;

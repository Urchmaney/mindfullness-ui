import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AudioCall from './AudioCall'
import Answer  from "./Answer";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
          <Route path="/call" element={<AudioCall />} />
          <Route path="/answer" element={<Answer />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;

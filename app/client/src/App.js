import './App.css';
//Router
import {
  BrowserRouter as Router, 
  Route, 
  Routes, 
} from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Planner from './pages/Planner';
import NewJournal from './pages/NewJournal';
import Journals from './pages/Journals';
import Tunes from './pages/Tunes';


function App() {
  return (

    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/newjournal" element={<NewJournal />} />
      <Route exact path="/journals" element={<Journals />} />
      <Route exact path="/tunes" element={< Tunes />} />
      <Route exact path="/planner" element={< Planner />} />
      </Routes>
    </Router>

  );
}

export default App;

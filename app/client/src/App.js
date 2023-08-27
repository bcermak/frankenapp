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
import Journal from './pages/Journal';
import Tunes from './pages/Tunes';


function App() {
  return (

    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/journal" element={<Journal />} />
      <Route exact path="/tunes" element={< Tunes />} />
      <Route exact path="/planner" element={< Planner />} />
      </Routes>
    </Router>

  );
}

export default App;

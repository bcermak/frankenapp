import './App.css';
//Router
import {
  BrowserRouter as Router, 
  Route, 
  Routes, 
} from 'react-router-dom';
//Pages
import MainPage from './pages/index';
import WeatherPage from './pages/WeatherPage';
import NewPost from './pages/NewPost';


function App() {
  return (

    <Router>
      <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/newpost" element={<NewPost />} />
      <Route exact path="/weather" element={< WeatherPage />} />
      </Routes>

    </Router>

  );
}

export default App;

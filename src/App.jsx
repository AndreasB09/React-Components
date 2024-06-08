import "./App.css";
import Home from './pages/Home/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from './pages/Slider/Slider.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Slider" element={<Slider />} />
      </Routes>
    </Router>
  );
}

export default App;

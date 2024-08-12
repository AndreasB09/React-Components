import "./App.css";
import Home from './pages/Home/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from './pages/Slider/Slider.jsx'
import Animations from './pages/Animations/Animations.jsx'
import Test from './pages/Test/Test.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="Animations" element={<Animations />} />
        <Route path="Test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;

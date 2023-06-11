import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import Chatbot from "./pages/Chatbot";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/HomePage/Chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
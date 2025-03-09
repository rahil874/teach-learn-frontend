import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Teach from './Components/Teach';
import Learn from './Components/Learn';
import axios from "axios";
import "./App.css";

const BACKEND_URL = "http://localhost:5555"; // Replace with your backend server URL

function App() {
  const [message, setMessage] = useState("");

  return (
    <Router>
      <div className="App">
        <h1>Welcome to Teach-Learn</h1>
        <h2>Teaching is the best way of Learning</h2>

        <Link to="/teach">
          <button>Teach</button>
        </Link>
        <Link to="/learn">
          <button>Learn</button>
        </Link>

        <Routes>
          <Route path="/teach" element={<Teach />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>

        <div id="message">{message}</div>
      </div>
    </Router>
  );
}

export default App;

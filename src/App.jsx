// App.jsx
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Learn from "./Components/Learn.jsx";
import Teach from "./Components/Teach.jsx";
import WebsiteWorking from "./Components/WebsiteWorking";
import Rules from "./Components/Rules";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import logo from "./Images/Logo2.png";
import "./App.css";

import Navbar from "./Components/Navbar.jsx"

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
      
  return (
    <div
      className={`App ${currentPath === "/" ? "home-background" : ""} ${
        currentPath === "/learn" ? "learn-background" : ""
      } ${currentPath === "/teach" ? "teach-background" : ""}`}
    >
      <Navbar/>
      <Routes>
        <Route path="/teach" element={<Teach />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/working" element={<WebsiteWorking />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route
          path="/"
          element={
            <div className="homepage-content">
              <div>
                      <Link to="/">
                        <img src={logo} alt="Teach-Learn Logo" />
                      </Link>
                    </div>
              <h1>Teaching is the best way of Learning</h1>
              <h2>Teach and Learn from students all over the world</h2>
              {location.pathname === "/" && (
                <nav>
                  <Link to="/teach">
                    <button>I am a Teacher</button>
                  </Link>
                  <Link to="/learn">
                    <button>I am a Learner</button>
                  </Link>
                </nav>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

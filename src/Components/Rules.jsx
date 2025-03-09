import rules from "../Images/Rules1.jpeg";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "../Images/Logo2.png";

const Rules = () => {
  return (
    <div className="rules">
      <div className="rules2">
        <div>
          <Link to="/">
            <img src={logo} alt="Teach-Learn Logo" />
          </Link>
        </div>
        <h2>1. Please be Respectful to Everyone on Teach-Learn</h2>
        <h2>2. Please be Polite with others</h2>
        <h2>3. Please Avoid using Abusive words/Vulgar Language</h2>
      </div>
      <div className="rules1">
        <img src={rules} alt="rules-image" />
      </div>
    </div>
  );
};

export default Rules;

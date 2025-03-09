import contactus from "../Images/Contactus1.jpg";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "../Images/Logo2.png";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="contactus2">
        <div>
          <Link to="/">
            <img src={logo} alt="Teach-Learn Logo" />
          </Link>
        </div>
        <h2>Gmail:</h2>
        <h2>Instagram:</h2>
        <h2>Facebook:</h2>
      </div>
      <div className="contactus1">
        <img src={contactus} alt="contactus-image" />
      </div>
    </div>
  );
};

export default ContactUs;

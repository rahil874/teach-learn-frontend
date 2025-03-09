import aboutus from "../Images/Aboutus1.png";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "../Images/Logo2.png";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus1">
        <div>
          <Link to="/">
            <img src={logo} alt="Teach-Learn Logo" />
          </Link>
        </div>
        <h2>
          Difference between studying on Youtube (By Watching Videos) VERSUS
          Studying LIVE (On Teach-Learn)
        </h2>
        <table>
          <thead>
            <tr>
              <th style={{ color: "red" }}>YouTube</th>
              <th style={{ color: "green" }}>Teach-Learn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "red" }}>Distraction</td>
              <td style={{ color: "green" }}>NO Distraction</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>Same content to everyone</td>
              <td style={{ color: "green" }}>CUSTOMIZED content to everyone</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>Cannot clarify doubts Live</td>
              <td style={{ color: "green" }}>CAN clarify doubts Live</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>NO Study Environment</td>
              <td style={{ color: "green" }}>Study Environment</td>
            </tr>
          </tbody>
        </table>

        <h2>Difference between Teach-Learn and Other Study Websites</h2>
        <table>
          <thead>
            <tr>
              <th style={{ color: "red" }}>Other Study Websites</th>
              <th style={{ color: "green" }}>Teach-Learn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "red" }}>Paid</td>
              <td style={{ color: "green" }}>FREE</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>
                Registration or Signup is required
              </td>
              <td style={{ color: "green" }}>
                NO Registration or Signup is required
              </td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>NO Video Calling in Groups</td>
              <td style={{ color: "green" }}>Video Calling in Groups</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>Advertisements</td>
              <td style={{ color: "green" }}>NO Advertisements</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="aboutus2">
        <img src={aboutus} alt="aboutus-image" />
      </div>
    </div>
  );
};

export default AboutUs;

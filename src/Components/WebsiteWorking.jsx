import Working1 from "../Images/Working1.jpeg"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "../Images/Logo2.png";

const WebsiteWorking = () => {

    return (
      <div className="working">
        <div className="working1">
          <div className="working2">
            <Link to="/">
              <img src={logo} alt="Teach-Learn Logo" />
            </Link>
          </div>
          <h2>
            1. "Teacher" in our website means "You are not necessarily
            Trained/Professional Teacher".If you can teach one topic or one
            subject, then you are "TEACHER" of that topic/Subject according to
            Teach-Learn Philosophy.{" "}
          </h2>
          <h2>
            2. Teacher's point of view: As a "TEACHER", You can grow your
            knowledge in particular Topic/Subject by teaching it to
            Learners/Students.{" "}
          </h2>
          <h2>
            3. Learner's point of view: As a "Learner",Once you learn a Topic,
            then you should become a "TEACHER" and you should instantly Teach it
            to others in order to increase your knowledge.
          </h2>
        </div>
        <div className="working2">
          <img src={Working1} alt="working-image" />
        </div>
      </div>
    );

}

export default WebsiteWorking;
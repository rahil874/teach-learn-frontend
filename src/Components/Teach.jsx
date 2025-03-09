//Teach.jsx

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "../Images/Logo2.png";

const Teach = () => {
  const handleTeachClick = async () => {
    const topic = window.prompt("Enter Topic Name:");
    const timings = window.prompt("Enter Date & Timings:");
    
    if (topic && timings) {
      try {
        const response = await fetch('http://localhost:5555/api/save-topic', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ topic, timings }),
        });
        
        if (response.ok) {
          // alert(`Topic and timings saved successfully!\n\n`);
          alert(`Save below Discord's Link and Please join this link at ${timings} to teach ${topic}:\nhttps://discord.com/invite/vavFeuHJ4N`);
          // window.location.href = "https://discord.com/invite/vavFeuHJ4N";
        } else {
          throw new Error('Failed to save topic');
        }
      } catch (error) {
        console.error('Error saving topic:', error);
        alert('Error saving topic. Please try again.');
      }
    }
  };

  return (
    <div className="teach-content">
      <div>
              <Link to="/">
                <img src={logo} alt="Teach-Learn Logo" />
              </Link>
            </div>
      <h1>Welcome to Teach Page</h1>
      <h2>Teaching is the best way of Learning</h2>
      <button
        onClick={handleTeachClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Teach
      </button>
    </div>
  );
}

export default Teach;

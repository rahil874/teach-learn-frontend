//Learn.jsx

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "../Images/Logo2.png";

import { useEffect, useState } from 'react';

const Learn = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await fetch('http://localhost:5555/api/get-topic');
        if (!response.ok) {
          throw new Error('Failed to fetch topic');
        }
        const data = await response.json();
        setTopics(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, []);

  return (
    <div className="learn-content">
      <div>
        <Link to="/">
          <img src={logo} alt="Teach-Learn Logo" />
        </Link>
      </div>
      <h1>Welcome to Learn Page</h1>
      <h2>Learning is the only way to be able to Teach Others</h2>

      {loading ? (
        <p>Loading topic information...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <div style={{ marginTop: "20px" }}>
          {topics.length > 0 ? (
            <div>
              <h2>Available Topics:</h2>
              {topics.map((topic, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <h3>Topic: {topic.topic}</h3>
                  <p>Date & Timings: {topic.timings}</p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://discord.com/invite/vavFeuHJ4N",
                        "_blank"
                      )
                    }
                    style={{
                      padding: "10px 20px",
                      fontSize: "16px",
                      marginTop: "20px",
                      cursor: "pointer",
                    }}
                  >
                    Join <span>{topic.topic}</span> Class
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No topics currently available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Learn;

import "./../styles/Start.css";
import { useState } from "react";

function Start({ setScreen, setScore, setCategory, setDifficulty }) {
  const [name, setName] = useState("");

  const handleStart = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    localStorage.setItem("quiz_user_name", name);
    setScore(0);
    setScreen("quiz");
  };

  return (
    <div className="start-container">
      <div className="start-card">
        <h1 className="title">Quiz App</h1>

        <input
          type="text"
          placeholder="Enter your name"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="select-input"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="general">General Knowledge</option>
          <option value="webdev">Web Development</option>
          <option value="math">Math</option>
        </select>

        <select
          className="select-input"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button className="start-btn" onClick={handleStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Start;

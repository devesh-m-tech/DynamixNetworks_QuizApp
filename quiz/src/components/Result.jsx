import { useState } from "react";
import "./../styles/Result.css";

function Result({ setScreen, score, total }) {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (feedback.trim().length < 10) {
      alert("Please write at least 50 words of feedback.");
      return;
    }

    const name = localStorage.getItem("quiz_user_name");

    try {
      await fetch("http://localhost:5000/api/feedback/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          score,
          total,
          feedback,
        }),
      });

      setSubmitted(true);
    } catch (err) {
      alert("Error submitting feedback. Try again later.");
    }
  };

  if (submitted) {
    return (
      <div className="result-container">
        <div className="result-card">
          <h1 className="result-title">Thank You! 🎉</h1>
          <p className="result-score">Your feedback has been submitted successfully.</p>

          <button className="restart-btn" onClick={() => setScreen("start")}>
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="result-container">
      <div className="result-card">
        <h1 className="result-title">Quiz Completed 🎉</h1>

        <p className="result-score">
          You scored <span>{score}</span> out of <span>{total}</span>
        </p>

        <textarea
          className="feedback-box"
          placeholder="Write your 50-word feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit Feedback
        </button>

        <button className="restart-btn" onClick={() => setScreen("start")}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default Result;

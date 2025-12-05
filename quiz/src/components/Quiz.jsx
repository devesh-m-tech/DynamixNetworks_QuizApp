import { useState, useEffect } from "react";
import "./../styles/Quiz.css";

function Quiz({ setScreen, setScore, setTotal }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState([]);
  const [time, setTime] = useState(10);

  const shuffle = (list) =>
    list
      .map((item) => ({ ...item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((item) => item);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("http://localhost:5000/api/questions");
      const data = await response.json();

      const random = shuffle(data);
      setQuestions(random);
      setLocked(Array(random.length).fill(null));
    };

    load();
  }, []);

  const next = () => {
    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent((v) => v + 1);
      setSelected(locked[current + 1]);
      setTime(10);
    } else {
      setTotal(questions.length);
      setScreen("result");
    }
  };

  const handleNext = () => {
    if (selected !== null) next();
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent((v) => v - 1);
      setSelected(locked[current - 1]);
      setTime(10);
    }
  };

  const selectOption = (index) => {
    const updated = [...locked];
    updated[current] = index;
    setLocked(updated);
    setSelected(index);
  };

  useEffect(() => {
    if (time === 0) {
      next();
      return;
    }

    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  if (!questions.length) {
    return <div className="loading">Loading questions...</div>;
  }

  return (
    <div className="quiz-container">
      <p className="question-count">
        Question {current + 1} of {questions.length}
      </p>

      <div className={`timer-box ${time <= 3 ? "timer-low" : ""}`}>
        ⏳ {time}s
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="quiz-card slide-in">
        <h2 className="quiz-question">{questions[current].question}</h2>

        <div className="options-list">
          {questions[current].options.map((opt, i) => (
            <div
              key={i}
              className={`option ${selected === i ? "selected" : ""}`}
              onClick={() => selectOption(i)}
            >
              {opt}
            </div>
          ))}
        </div>

        <div className="nav-buttons">
          <button className="back-btn" onClick={handleBack} disabled={current === 0}>
            ⬅ Back
          </button>

          <button
            className="next-btn"
            onClick={handleNext}
            disabled={selected === null}
          >
            {current === questions.length - 1 ? "Finish" : "Next ➜"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;

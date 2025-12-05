import "./../styles/Welcome.css";

function WelcomeScreen({ setScreen }) {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome to the Quiz App 🎉</h1>
        <p className="welcome-text">Get ready to test your knowledge and challenge yourself!</p>

        <button
          className="welcome-btn"
          onClick={() => setScreen("start")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;

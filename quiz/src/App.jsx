import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [screen, setScreen] = useState("welcome");

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const [category, setCategory] = useState("general");
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <div>
      {screen === "welcome" && <WelcomeScreen setScreen={setScreen} />}

      {screen === "start" && (
        <Start
          setScreen={setScreen}
          setScore={setScore}
          setCategory={setCategory}
          setDifficulty={setDifficulty}
        />
      )}

      {screen === "quiz" && (
        <Quiz
          setScreen={setScreen}
          score={score}
          setScore={setScore}
          setTotal={setTotal}
          category={category}
          difficulty={difficulty}
        />
      )}

      {screen === "result" && (
        <Result setScreen={setScreen} score={score} total={total} />
      )}
    </div>
  );
}

export default App;

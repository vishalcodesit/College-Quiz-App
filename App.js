import React, { useState } from "react";
import UserInput from "./components/UserInput";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";
import "./styles.css";

function App() {
  const [username, setUsername] = useState(""); 
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("tech");
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [darkMode, setDarkMode] = useState(false);

  
  const startQuiz = (name, category, difficulty) => {
    if (name.trim()) {
      setUsername(name); 
    } else {
      setUsername("Anonymous"); 
    }
    setSelectedCategory(category); 
    setSelectedDifficulty(difficulty); 
    setQuizStarted(true); 
  };

  
  const endQuiz = () => {
    const date = new Date().toLocaleString(); 
    setLeaderboard((prev) => [
      ...prev,
      {
        username: username || "Anonymous", 
        score: score,
        category: selectedCategory,
        difficulty: selectedDifficulty,
        date: date,
      },
    ]);
    setQuizStarted(false); 
    setScore(0); 
  };

  
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <h1>College Quiz App</h1>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      
      {!quizStarted ? (
        <UserInput startQuiz={startQuiz} />
      ) : (
        <Quiz
          username={username}
          score={score}
          setScore={setScore}
          endQuiz={endQuiz}
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
        />
      )}

      
      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
}

export default App;


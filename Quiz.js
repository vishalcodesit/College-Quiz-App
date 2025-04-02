import React, { useState, useEffect } from "react";
import { questions } from "./data/questions";

function Quiz({ username, score, setScore, endQuiz, selectedCategory, selectedDifficulty }) {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(() => {
    switch (selectedDifficulty) {
      case "easy":
        return 25;
      case "medium":
        return 20;
      case "hard":
        return 15;
      default:
        return 20;
    }
  });
  const [lifelineUsedCount, setLifelineUsedCount] = useState(0); 
  const [answersToShow, setAnswersToShow] = useState([]);

  
  const shuffleQuestions = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 5); 
  };

  
  useEffect(() => {
    if (questions[selectedCategory] && questions[selectedCategory][selectedDifficulty]) {
      const categoryQuestions = questions[selectedCategory][selectedDifficulty];
      const randomizedQuestions = shuffleQuestions(categoryQuestions);
      setSelectedQuestions(randomizedQuestions);
      setAnswersToShow(Object.keys(randomizedQuestions[0]?.answers || {})); 
    } else {
      console.error("No questions found for the selected category and difficulty.");
    }
  }, [selectedCategory, selectedDifficulty]);

  
  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(); 
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer); 
  }, [timeLeft]);

  
  const handleAnswer = () => {
    if (
      selectedAnswer === selectedQuestions[currentQuestion]?.correctAnswer
    ) {
      setScore((prev) => prev + 1); 
    }

    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1); 
      setTimeLeft(() => {
        switch (selectedDifficulty) {
          case "easy":
            return 15;
          case "medium":
            return 20;
          case "hard":
            return 25;
          default:
            return 20;
        }
      }); 
      setAnswersToShow(
        Object.keys(selectedQuestions[currentQuestion + 1]?.answers || {})
      ); 
    } else {
      endQuiz(); 
    }
    setSelectedAnswer(""); 
  };

  
  const useLifeline = () => {
    if (lifelineUsedCount >= 2) return; 

    const correctAnswer =
      selectedQuestions[currentQuestion]?.correctAnswer;
    const incorrectAnswers = Object.keys(
      selectedQuestions[currentQuestion]?.answers || {}
    ).filter((key) => key !== correctAnswer);

    const answersToRemove = incorrectAnswers.slice(0, 2); 
    const updatedAnswersToShow = Object.keys(
      selectedQuestions[currentQuestion]?.answers || {}
    ).filter((key) => !answersToRemove.includes(key));

    setAnswersToShow(updatedAnswersToShow); 
    setLifelineUsedCount((prevCount) => prevCount + 1); 
  };

  if (!selectedQuestions || selectedQuestions.length === 0) {
    return <p>Loading questions...</p>; 
  }

  return (
    <div className="Quiz">
      
      <h2>Welcome to the Quiz!</h2>

      
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${
              ((currentQuestion + 1) / selectedQuestions.length) * 100
            }%`,
          }}
        ></div>
      </div>

      
      {selectedQuestions.length > currentQuestion && (
        <>
          <h3>Question {currentQuestion + 1}:</h3>
          <p>{selectedQuestions[currentQuestion]?.question}</p>
        </>
      )}

      
      <div className="answers">
        {answersToShow.map((option) => (
          <button
            key={option}
            className={`answer-btn ${
              selectedAnswer === option ? "selected" : ""
            }`}
            onClick={() => setSelectedAnswer(option)}
          >
            <strong>{option.toUpperCase()}:</strong>{" "}
            {selectedQuestions[currentQuestion]?.answers[option]}
          </button>
        ))}
      </div>

      
      <p>⏳ Time left: {timeLeft} seconds</p>

      
      <button 
        onClick={useLifeline} 
        className="lifeline-btn"
        disabled={lifelineUsedCount >= 2} 
      >
        🎯 Use Lifeline (50-50)
        {lifelineUsedCount >= 2 && " - Limit Reached"}
      </button>

      
      <button onClick={handleAnswer} disabled={!selectedAnswer}>
        {currentQuestion < selectedQuestions.length - 1
          ? "Next Question →"
          : "🏁 Finish Quiz"}
      </button>

      
      <p>Your current score: {score}</p>
      
      
      <p>Lifelines Remaining: {2 - lifelineUsedCount}</p>
    </div>
  );
}

export default Quiz;



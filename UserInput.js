import React, { useState } from "react";

function UserInput({ startQuiz }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("tech");
  const [difficulty, setDifficulty] = useState("easy");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      startQuiz(name, category, difficulty);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-input-form">
      <input
        type="text"
        placeholder="Enter your username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      
      <div className="select-group">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="tech">Tech</option>
          <option value="science">Science</option>
          <option value="general">General Knowledge</option>
        </select>

        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button type="submit">🚀 Start Quiz</button>
    </form>
  );
}

export default UserInput;

import React, { useState } from "react";
import PropTypes from "prop-types";

function Leaderboard({ leaderboard }) {
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  
  const filteredLeaderboard = leaderboard
    .filter(
      (entry) =>
        (filterCategory === "all" || entry.category === filterCategory) &&
        (filterDifficulty === "all" || entry.difficulty === filterDifficulty)
    )
    .sort((a, b) => b.score - a.score);

  
  const paginatedData = filteredLeaderboard.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredLeaderboard.length / itemsPerPage);

  return (
    <div className="Leaderboard">
      <h2>🏆 Leaderboard</h2>

      
      <div className="filters">
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="tech">Tech</option>
          <option value="science">Science</option>
          <option value="general">General Knowledge</option>
        </select>

        <select
          value={filterDifficulty}
          onChange={(e) => setFilterDifficulty(e.target.value)}
        >
          <option value="all">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      
      <ul className="leaderboard-list">
        {paginatedData.map((entry, index) => (
          <li key={index} className="leaderboard-item">
            
            <div className="user-info">
              <span className="username">{entry.username || "Anonymous"}</span> 
            </div>

            
            <div className="meta-info">
              <span className="meta">{entry.category} • {entry.difficulty}</span>
              
              <span className="score-date">
                <span className="score">{entry.score}/5</span>{" "}
                <span className="date">{entry.date}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>

      
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

Leaderboard.propTypes = {
  leaderboard: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Leaderboard;

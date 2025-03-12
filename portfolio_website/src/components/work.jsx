import React, { useState } from "react";
import "./work.css";

const Work = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className="Work">
      <div className="work_title">
        My creative <span>Portfolio</span> section
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => setFilter("All")}>
          All
        </button>
        <button className="btn" onClick={() => setFilter("Javascript")}>
          Js
        </button>
        <button className="btn" onClick={() => setFilter("React")}>
          React 
        </button>
      </div>

      <div className="cards">
        {(filter === "All" || filter === "React") && (
          <div className="card">
            <img
              className="card_img"
              src="./src/assets/portfolio.png"
              alt="Portfolio Website"
              
            />
            <div className="project_name">Portfolio Website</div>
            <u> React </u>
          </div>
        )}
        {(filter === "All" || filter === "Javascript") && (
          <div className="card">
            <img
              className="card_img"
              src="./src/assets/to_do.png"
              alt="To-Do List"
            />
            <div className="project_name">To-Do List</div><u>
            Javascript </u>
          </div>
        )}
        {(filter === "All" || filter === "Javascript") && (
          <div className="card">
            <img
              className="card_img"
              src="./src/assets/movie_explorer.png"
              alt="QR Code Generator"
            />
            <div className="project_name">Movie Explorer</div>
            <u> Javascript </u>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;



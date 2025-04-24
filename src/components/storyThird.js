import React from "react";
import "./styles/storyThird.css";

const Results = () => {
  return (
    <div className="results-container">
      <h1 className="results-title">Early ACCESS study results show promise for patients</h1>
      <p className="results-subtitle">One year after transplant:</p>
      <div className="results-stats">
        <div className="stat-item">
          <h2>79%</h2>
          <p>Excellent overall survival</p>
        </div>
        <div className="stat-item">
          <h2>51%</h2>
          <p>Positive GRFS rates</p>
        </div>
        <div className="stat-item">
          <h2>9%</h2>
          <p>Low GVHD rates</p>
        </div>
      </div>
    </div>
  );
};

export default Results;

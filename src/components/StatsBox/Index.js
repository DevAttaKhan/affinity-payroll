import React from "react";
import "./style.scss";

const StatsBox = ({ task, count }) => {
  return (
    <div className="stats-box">
      <p>{task}</p>
      <h3>{count}</h3>
    </div>
  );
};

export default StatsBox;

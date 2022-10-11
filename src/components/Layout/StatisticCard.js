import React from "react";

import "./StatisticCard.scss";

const StatisticCard = ({ children, badge, title }) => {
  return (
    <div className="statistic__card">
      <h4 className="card-title">
        {title}
        {badge && <span className="badge bg-inverse-danger ms-2">{badge}</span>}
      </h4>
      {children}
    </div>
  );
};

export default StatisticCard;

import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ faIcon, count, name }) => {
  return (
    <div className="card-body">
      <span className="dash-widget-icon">
        <FontAwesomeIcon icon={faIcon} className="down_icon" />
      </span>
      <div className="dash-widget-info">
        <h3>{count}</h3>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Card;

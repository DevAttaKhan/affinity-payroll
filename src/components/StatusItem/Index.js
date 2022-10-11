import React from "react";
import CircleIcon from "../../assets/Icons/CircleIcon";
import "./style.scss";

const StatusItem = ({ task, count, color }) => {
  return (
    <div className="status-item mb-4 fw-bold">
      <CircleIcon className=" me-2" color={color} />
      {task}
      <span className="float-end">{count}</span>
    </div>
  );
};

export default StatusItem;

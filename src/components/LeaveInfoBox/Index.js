import React from "react";
import Avatar from "../Avatar/Index";
import "./style.scss";

const LeaveInfoBox = ({ avtar, name }) => {
  return (
    <div className="leave-info-box d-flex">
      <Avatar name={name} img={avtar} />
    </div>
  );
};

export default LeaveInfoBox;

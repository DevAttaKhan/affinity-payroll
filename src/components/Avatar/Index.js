import React from "react";
import "./style.scss";

const Avatar = ({ name, designation, img }) => {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img alt="" src={img} />
      </div>
      <p>
        {name} {designation && <span>{designation}</span>}
      </p>
    </div>
  );
};

export default Avatar;

import React from "react";
import "./style.scss";

const Button = ({ btnText, onClick }) => {
  return (
    <div className="text-center load-more">
      <button onClick={onClick} className="generic_buttn">
        {btnText}
      </button>
    </div>
  );
};

export default Button;

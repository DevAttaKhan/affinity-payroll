import React, { useState } from "react";
import CircleIcon from "../assets/Icons/CircleIcon";
import "./test.scss";

const Test = () => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [status, setStatus] = useState({
    text: "Active",
    icon: <CircleIcon color="green" />,
  });

  const display = selectOpen ? "d-block" : "d-none";

  const options = [
    {
      text: "Active",
      icon: <CircleIcon color="green" />,
    },
    {
      text: "Inactive",
      icon: <CircleIcon />,
    },
  ];

  const selectState = (item) => {
    setStatus(item);
    setSelectOpen(false);
  };

  return (
    <div className="select">
      <button className="status-btn" onClick={() => setSelectOpen(!selectOpen)}>
        {status.icon} {status.text}
      </button>

      <div className={`menu  ${display}`}>
        {options.map((el, i) => {
          if (el.text === status.text) return null;

          return (
            <span key={i} onClick={() => selectState(el)}>
              {el.icon}
              {el.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Test;

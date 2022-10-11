import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const SelectDropDown = ({ list }) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(list[0]);
  const selectRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!selectRef.current.contains(e.target)) {
        setSelectOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });
  const handleClick = () => {
    setSelectOpen(!selectOpen);
  };

  const handleSelect = (cat) => {
    setSelectValue(cat);
    setSelectOpen(false);
  };

  const toggleMenu = selectOpen ? "show" : "";
  return (
    <div className="select-dropdown" ref={selectRef}>
      <button onClick={handleClick} className={selectOpen ? "open" : ""}>
        {selectValue}
        <FontAwesomeIcon icon={faAngleDown} className="down_icon" />
      </button>
      <div className={`select-menu ${toggleMenu}`}>
        {list.map((el, i) => (
          <span key={i} onClick={() => handleSelect(el)}>
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SelectDropDown;

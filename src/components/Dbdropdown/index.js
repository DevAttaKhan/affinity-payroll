import "./style.scss";
import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../../assets/Icons/ArrowIcon";

function DbDropdown({
  children,
  position,
  btnChild,
  textCount,
  notiDot,
  btnImg,
  caret,
  textBtn,
}) {
  const [dbDropDown, setDbDropdown] = useState(false);
  const ref = useRef(null);

  const handleDropdown = (event) => {
    setDbDropdown(!dbDropDown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current.contains(event.target)) {
        setDbDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={`db_dropdown ${position ? position : ""}`}>
      {textBtn ? (
        <button
          ref={ref}
          className={`dbBtn_text ${dbDropDown ? "show" : ""}`}
          onClick={handleDropdown}
        >
          {textBtn}
          <ArrowIcon width={"16px"} height={"15px"} color={"#fff"} />
        </button>
      ) : (
        <button ref={ref} className="db_ddBtn" onClick={handleDropdown}>
          {textCount && <span className={"count"}>{textCount}</span>}
          {notiDot && <span className={"dotHead"} />}
          {btnChild}
          {btnImg && <img className={"btnImg"} src={btnImg} alt={""} />}
        </button>
      )}

      <div
        className={`dropdown_menu ${dbDropDown ? "show" : ""} ${
          caret ? "caret" : ""
        }`}
      >
        <ul>
          {children.length ? (
            children?.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>{children}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DbDropdown;

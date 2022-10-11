import { Fragment } from "react";
import { Link } from "react-router-dom";

function DropdownItem({ link, onClick, text, icon }) {
  return (
    <Fragment>
      {link ? (
        <Link to={link} className={"dbDropdown_item"}>
          {icon && <div className="icon">{icon}</div>}
          {text && <span>{text}</span>}
        </Link>
      ) : (
        <button className={"dbDropdown_item"} onClick={onClick}>
          {icon && <div className="icon">{icon}</div>}
          {text && <span>{text}</span>}
        </button>
      )}
    </Fragment>
  );
}

export default DropdownItem;

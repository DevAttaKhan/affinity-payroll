import "./style.scss";
import { useEffect, useRef, useState } from "react";

function CountryDropdown() {
  const [dropDown, setDropdown] = useState(false);
  const ref = useRef(null);

  const handleDropdown = (event) => {
    setDropdown(!dropDown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="db_country_dropdown">
      <button ref={ref} className="db_ddBtn" onClick={handleDropdown}>
        <img src={"/images/turkish-flag.png"} alt={""} />
      </button>
      <div className={`dropdown_menu ${dropDown ? "show" : ""}`}>
        <ul>
          <li>
            <a href="/">
              <img src={"/images/turkish-flag.png"} alt={""} />
              <span>Turkish</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={"/images/turkish-flag.png"} alt={""} />
              <span>Turkish</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={"/images/turkish-flag.png"} alt={""} />
              <span>Turkish</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={"/images/turkish-flag.png"} alt={""} />
              <span>Turkish</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountryDropdown;

import "./style.scss";
import CountryDropdown from "../CountryDropdown";
import DbDropdown from "../Dbdropdown";
import EnvelopIcon from "../../assets/Icons/EnvelopIcon";
import SunIcon from "../../assets/Icons/SunIcon";
import { Link } from "react-router-dom";
import MessageAlert from "../MessageAlert";
import BellIcon from "../../assets/Icons/BellIcon";
import NotificationAlert from "../NotificationAlert";
import ProfileIcon from "../../assets/Icons/ProfleIcon";
import DropdownItem from "../DropdownItem";
import InboxIcon from "../../assets/Icons/InboxIcon";
import SignOutIcon from "../../assets/Icons/SignoutIcon";

function Header() {
  return (
    <header className="db_header">
      <ul className="logo_cell">
        <li className="db_logo">
          <a href="/">
            <img src="/images/logo.svg" alt="logo" className="navbar-logo" />
          </a>
        </li>
        <li>
          <Link to="/" className={"db_logoText"}>
            Affinity
          </Link>
        </li>
      </ul>
      <div className="db_search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search toggle-search"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input placeholder={"Search..."} />
      </div>
      <div className="db_cellActions">
        <div className="theme_mode">
          <button className="d-flex align-items-center">
            <SunIcon />
            <span className="ml-2">Light</span>
          </button>
        </div>
        {/*  Country dropdown  */}
        <div className={"header_dd ms-4"}>
          <div className={"ml-0"}>
            <CountryDropdown />
          </div>

          {/* Notifications Dropdown */}
          <div className={"ms-3"}>
            <DbDropdown caret btnChild={<BellIcon />} notiDot>
              <NotificationAlert
                notification={"Someone tagged you in @Realchem"}
                time={"4 hrs ago"}
                link={"/"}
              />
              <NotificationAlert
                notification={"Someone tagged you in @Realchem"}
                time={"4 hrs ago"}
                link={"/"}
              />
              <NotificationAlert
                notification={"Someone tagged you in @Realchem"}
                time={"4 hrs ago"}
                link={"/"}
              />
            </DbDropdown>
          </div>

          {/* Messages Dropdown */}
          <div className={"ms-3"}>
            <DbDropdown caret btnChild={<EnvelopIcon />} textCount={"4"}>
              <MessageAlert name={"AR Rahman"} message={"Hi!"} link={"/"} />
              <MessageAlert
                name={"Sadaqat Ali Raja"}
                message={"Hello!"}
                link={"/"}
              />
              <MessageAlert
                name={"Muhammad Ikram"}
                message={"Yes!"}
                link={"/"}
              />
              <MessageAlert name={"Sulaiman"} message={"Salam!"} link={"/"} />
            </DbDropdown>
          </div>

          {/* Profile dropdown */}
          <div className={"ms-4"}>
            <DbDropdown caret btnImg={"/images/profile-16.jpeg"}>
              <DropdownItem
                text={"Profile"}
                icon={<ProfileIcon />}
                link={"/profile"}
              />
              <DropdownItem
                text={"inbox"}
                icon={<InboxIcon />}
                link={"/inbox"}
              />
              <DropdownItem
                text={"Sign Out"}
                icon={<SignOutIcon />}
                link={"/"}
              />
            </DbDropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import ChartColumnIcon from '../../assets/Icons/ChartColumnIcon';

import BuildingIcon from '../../assets/Icons/BuildingIcon';

import './style.scss';
import { Accordion } from 'react-bootstrap';
import HomeIcon from '../../assets/Icons/HomeIcon';
import { Link, NavLink } from 'react-router-dom';
import AppsIcon from '../../assets/Icons/AppsIcon';
import BoxIcon from '../../assets/Icons/BoxIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="db_sidebar">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Link to="/dashboard/home" className="sidebar_link">
              <div className="sidebar_icon">
                <HomeIcon />
              </div>
              <span>Dashboard</span>
            </Link>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <Link to="leave" className="sidebar_link">
              <div className="sidebar_icon">
                <AppsIcon />
              </div>
              <span>Leaves Configuration</span>
              {/* <FontAwesomeIcon icon={faAngleDown} className="down_icon" /> */}
            </Link>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <Link to="attendence" className="sidebar_link">
              <div className="sidebar_icon">
                <BoxIcon />
              </div>
              <span>Attendance</span>
              {/* <FontAwesomeIcon icon={faAngleDown} className="down_icon" /> */}
            </Link>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <Link to="expense" className="sidebar_link">
              <div className="sidebar_icon">
                <AppsIcon />
              </div>
              <span>Expense</span>
              {/* <FontAwesomeIcon icon={faAngleDown} className="down_icon" /> */}
            </Link>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <Link to="loan" className="sidebar_link">
              <div className="sidebar_icon">
                <BoxIcon />
              </div>
              <span>Loans Configuration</span>
              {/* <FontAwesomeIcon icon={faAngleDown} className="down_icon" /> */}
            </Link>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <Link to="employeeType" className="sidebar_link">
              <div className="sidebar_icon">
                <BoxIcon />
              </div>
              <span>Employee Type</span>
              {/* <FontAwesomeIcon icon={faAngleDown} className="down_icon" /> */}
            </Link>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <Link to="leaveRequests" className="sidebar_link">
              <div className="sidebar_icon">
                <BoxIcon />
              </div>
              <span>Leave Request</span>
              {/* <FontAwesomeIcon icon={faAngleDown} className="down_icon" /> */}
            </Link>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <Link to="advances" className="sidebar_link">
              <div className="sidebar_icon">
                <BoxIcon />
              </div>
              <span>Advances Configurations</span>
              {/* <FontAwesomeIcon icon={faAngleDown} className="down_icon" /> */}
            </Link>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <div className="sidebar_link">
              <div className="sidebar_icon">
                <BuildingIcon />
              </div>
              <span>Company</span>
              <FontAwesomeIcon icon={faAngleDown} className="down_icon" />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="accordion-menu">
              <li>
                <NavLink
                  to="employees"
                  className={({ isActive }) =>
                    isActive ? 'accordion-item-active' : undefined
                  }
                >
                  Employees
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="shifts"
                  className={({ isActive }) =>
                    isActive ? 'accordion-item-active' : undefined
                  }
                >
                  Shifts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="offices"
                  className={({ isActive }) =>
                    isActive ? 'accordion-item-active' : undefined
                  }
                >
                  Offices
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="departments"
                  className={({ isActive }) =>
                    isActive ? 'accordion-item-active' : undefined
                  }
                >
                  Departments
                </NavLink>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <Link to="reports" className="sidebar_link">
              <div className="sidebar_icon">
                <ChartColumnIcon />
              </div>
              <span>Reports</span>
              {/* <FontAwesomeIcon icon={faAngleDown} className="down_icon" /> */}
            </Link>
          </Accordion.Header>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Sidebar;

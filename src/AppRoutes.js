import { useState } from 'react';

import Test from './pages/Test';

import AddEmployee from './pages/Employees/AddEmployee';

import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import LeaveConfig from './pages/LeaveConfig/index';
import LoanConfig from './pages/LoanConfig/Index';
import AdvancesConfig from './pages/AdvancesConfig/index';
import Header from './components/Header';
import DbDropdown from './components/Dbdropdown';
import DropdownItem from './components/DropdownItem';
import BarsIcon from './assets/Icons/BarsIcon';
import Employees from './pages/Employees/index';
import Shifts from './pages/Shifts';
import Reports from './pages/Reports/Reports';
import Attendence from './pages/Attendence/Attendence';
import Expense from './pages/Expense/Expense';
import Offices from './pages/Offices';
import Departments from './pages/Departments';
import EmployeeTypeConfig from './pages/EmpTypeConfig/Index';
import LeaveRequestConfig from './pages/LeaveRequestConfig/Index';
function AppRoutes() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className={`db_wrapper ${sidebar ? 'sidebarHidden' : ''}`}>
        <Header />
        {/* Top Bar */}
        <div className={'db_topBar'}>
          <div className="topBar_container">
            <div className="row w-100">
              <div className="col-7 d-flex align-items-center">
                <button className={'sidebar_btn'} onClick={handleSidebar}>
                  <BarsIcon />
                </button>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    {/* <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li> */}
                  </ol>
                </nav>
              </div>
              <div className="col-5 d-flex justify-content-end">
                <DbDropdown textBtn={'settings'} position={'right'}>
                  <DropdownItem text={'settings'} />
                  <DropdownItem text={'mail'} />
                  <DropdownItem text={'print'} />
                  <DropdownItem text={'download'} />
                  <DropdownItem text={'share'} />
                </DbDropdown>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar_col">
          <Sidebar />
        </div>

        {/* Pages */}
        <div className="db_pagesWrap">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="leave" element={<LeaveConfig />} />
            <Route path="attendence" element={<Attendence />} />
            <Route path="expense" element={<Expense />} />
            <Route path="loan" element={<LoanConfig />} />
            <Route path="employeeType" element={<EmployeeTypeConfig />} />
            <Route path="leaveRequests" element={<LeaveRequestConfig />} />
            <Route path="advances" element={<AdvancesConfig />} />

            <Route path="employees" element={<Employees />} />
            <Route path="employees/addEmployee" element={<AddEmployee />} />
            <Route path="shifts" element={<Shifts />} />
            <Route path="offices" element={<Offices />} />
            <Route path="departments" element={<Departments />} />

            <Route path="reports" element={<Reports />} />
            <Route path="test" element={<Test />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AppRoutes;

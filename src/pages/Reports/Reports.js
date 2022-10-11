import React from "react";
import "./style.scss";

import AdminHeading from "../../components/AdminHeading/AdminHeading";
import SelectDropDown from "../../components/SelectDropdown/SelectDropDown";

const catagories = ["Leaves", "Advances", "Attendance", "Loan", "Expenses"];

const Reports = () => {
  return (
    <>
      <AdminHeading title="Reports" />
      <div className="row">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="report-category mb-5">
            <span>Report Category:</span>

            <SelectDropDown list={catagories} />
          </div>

          <div className="date-range">
            <h6 className="title">Date Range</h6>

            <div className="d-flex gap-5 mb-3 ">
              <div className="">
                <label className="form-label">From</label>
                <input type="date" className="form-control" />
              </div>
              <div className="">
                <label className="form-label">to</label>
                <input type="date" className="form-control" />
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Generate"
            className="generic_buttn border-0"
          />
        </form>
      </div>
    </>
  );
};

export default Reports;

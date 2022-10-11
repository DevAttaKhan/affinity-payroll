import React from "react";
import AdminHeading from "../../components/AdminHeading/AdminHeading";
import SelectDropDown from "../../components/SelectDropdown/SelectDropDown";
import AttendanceConfigTable from "../../components/AttendanceConfigurations/AttendanceConfigTable";

const Attendence = () => {
  return (
    <>
      <AdminHeading title="Attendance" />
      <div className="row">
        <div className="col-md-6">
          <div className="search mb-5">
            <label className="form-label">Search Name</label>
            <input type="search" className="form-control" />
          </div>
          <div className="row mb-5">
            <div className="col-md-6">
              <span className="mb-2 d-block">Department</span>
              <SelectDropDown list={["HR", "Management", "FrontEnd"]} />
            </div>
            <div className="col-md-6">
              <span className="mb-2 d-block">Designation</span>
              <SelectDropDown list={["PM", "GM", "Recruiter", "Developer"]} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <AttendanceConfigTable />
        </div>
      </div>
    </>
  );
};

export default Attendence;

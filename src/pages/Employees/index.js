import React from "react";
import AdminHeading from "../../components/AdminHeading/AdminHeading";
import EmployeesTable from "../../components/EmployeesConfigurations/EmployeesTable";

const index = () => {
  return (
    <>
      <AdminHeading title="Employees" />
      <div className="row py-2 mb-3">
        <EmployeesTable />
      </div>
    </>
  );
};

export default index;

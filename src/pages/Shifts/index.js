import React from "react";
import AdminHeading from "../../components/AdminHeading/AdminHeading";
import ShiftConfigForm from "../../components/ShiftConfigurations/ShiftConfigForm";
import ShiftConfigTable from "../../components/ShiftConfigurations/ShiftConfigTable";

const Shifts = () => {
  return (
    <>
      <AdminHeading title="Shifts" />
      <div className="row px-3 mb-3">
        <ShiftConfigForm />
      </div>
      <div className="row px-3 mb-3">
        <ShiftConfigTable />
      </div>
    </>
  );
};

export default Shifts;

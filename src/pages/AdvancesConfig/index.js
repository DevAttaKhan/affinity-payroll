import React from "react";
import AdminHeading from "../../components/AdminHeading/AdminHeading";
import AdvancesConfigForm from "../../components/AdvancesConfigurations/AdvancesConfigForm";
import AdvancesConfigTable from "../../components/AdvancesConfigurations/AdvancesConfigTable";

const AdvancesConfig = () => {
  return (
    <>
      <AdminHeading title="Advances Configuration" />
      <div className="row px-2 mb-3">
        <AdvancesConfigForm />
      </div>
      <div className="row px-2 mb-3">
        <AdvancesConfigTable />
      </div>
    </>
  );
};

export default AdvancesConfig;

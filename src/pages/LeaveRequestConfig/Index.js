import React from 'react';

import AdminHeading from '../../components/AdminHeading/AdminHeading';
import EmployeeTypeConfigForm from '../../components/EmployeeTypeConfigurations/EmployeeTypeConfigForm';
import EmployeeTypeConfigTable from '../../components/EmployeeTypeConfigurations/EmployeeTypeConfigTable';
const Index = () => {
  return (
    <>
      <AdminHeading title="Leave Requests" />
      <div className="row px-3 mb-3">
        <EmployeeTypeConfigForm />
      </div>
      <div className="row px-3 mb-3">
        <EmployeeTypeConfigTable />
      </div>
    </>
  );
};

export default Index;

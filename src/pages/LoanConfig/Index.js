import React from 'react';

import AdminHeading from '../../components/AdminHeading/AdminHeading';
import LoanConfigForm from '../../components/LoanConfigurations/LoanConfigForm';
import LoanConfigTable from '../../components/LoanConfigurations/LoanConfigTable';

const Index = () => {
  return (
    <>
      <AdminHeading title="Loan Type" />
      <div className="row px-3 mb-3">
        <LoanConfigForm />
      </div>
      <div className="row px-3 mb-3">
        <LoanConfigTable />
      </div>
    </>
  );
};

export default Index;

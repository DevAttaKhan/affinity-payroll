import React from 'react';
import AdminHeading from '../../components/AdminHeading/AdminHeading';
import OfficeConfigForm from '../../components/OfficeConfiguration/OfficeConfigForm';
import OfficeConfigTable from '../../components/OfficeConfiguration/OfficeConfigTable';
const Offices = () => {
  return (
    <>
      <AdminHeading title="Offices" />
      <div className="row px-3 mb-3">
        <OfficeConfigForm />
      </div>
      <div className="row px-3 mb-3">
        <OfficeConfigTable />
      </div>
    </>
  );
};

export default Offices;

import React from 'react';
import AdminHeading from '../../components/AdminHeading/AdminHeading';
import LeaveCategoryForm from '../../components/LeaveCategoryForm/LeaveCategoryForm';
import LeaveCategoryTable from '../../components/LeaveCategoryTable/Index';

const LeaveConfig = () => {
  return (
    <>
      <AdminHeading title="Leave Category Configuration" />
      <div className="row px-3 mb-3">
        <LeaveCategoryForm />
      </div>
      <div className="row px-3 mb-3">
        <LeaveCategoryTable />
      </div>
    </>
  );
};

export default LeaveConfig;

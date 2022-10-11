import React from 'react';
import AdminHeading from '../../components/AdminHeading/AdminHeading';
import DepartmentConfigForm from '../../components/DepartmentConfiguration/DepartmentConfigForm';
import DepartmentConfigTable from '../../components/DepartmentConfiguration/DepartmentConfigTable';

const Departments = () => {
  return (
    <>
      <AdminHeading title="Departments" />
      <div className="row px-3 mb-3">
        <DepartmentConfigForm />
      </div>
      <div className="row px-3 mb-3">
        <DepartmentConfigTable />
      </div>
    </>
  );
};

export default Departments;

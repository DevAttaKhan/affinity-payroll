import React, { useState, useEffect } from 'react';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
import EditeIcon from '../../assets/Icons/EditeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartments } from '../../store/feature/department/department';

const columns = [
  { path: 'id', lable: 'S.NO' },
  {
    path: 'name',
    lable: 'Department Name',
  },
  {
    path: 'office_id',
    lable: 'Office',
  },
  {
    path: 'edit',
    lable: 'Edit',
    content: (leave) => (
      <button>
        <EditeIcon width={16} />
      </button>
    ),
  },
];

const DepartmentConfigTable = () => {
  const dispatch = useDispatch();
  const [departmentState, setDepartmentState] = useState([]);
  const departmentData = useSelector((state) => state.departments);

  useEffect(() => {
    dispatch(getDepartments());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (departmentData) setDepartmentState(departmentData.data);
  }, [departmentData]);
  return (
    <CardContainer title="Departments List">
      {departmentState && departmentState.length > 0 ? (
        <Table data={departmentState} columns={columns} />
      ) : (
        <></>
      )}
    </CardContainer>
  );
};

export default DepartmentConfigTable;

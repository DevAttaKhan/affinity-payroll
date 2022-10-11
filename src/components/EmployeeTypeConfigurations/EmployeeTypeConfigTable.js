import React, { useState, useEffect } from 'react';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
import EditeIcon from '../../assets/Icons/EditeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeTypes } from '../../store/feature/employeeType/employeeType';

const columns = [
  { path: 'id', lable: 'S.NO' },
  {
    path: 'type_name',
    lable: 'Employee Type Name',
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

const EmployeeTypeConfigTable = () => {
  const dispatch = useDispatch();
  const [employeeTypeState, setEmployeeTypeState] = useState([]);
  const employeeTypeData = useSelector((state) => state.employeeTypes);

  useEffect(() => {
    dispatch(getEmployeeTypes());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (employeeTypeData) setEmployeeTypeState(employeeTypeData.data);
  }, [employeeTypeData]);

  return (
    <CardContainer title="EmployeeTypes List">
      {employeeTypeState.length > 0 ? (
        <Table data={employeeTypeState} columns={columns} />
      ) : (
        <></>
      )}
    </CardContainer>
  );
};

export default EmployeeTypeConfigTable;

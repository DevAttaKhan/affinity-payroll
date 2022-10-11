import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import { postEmployeeType } from '../../store/feature/employeeType/employeeType';
const inputs = [
  {
    label: 'Employee Type Name',
    name: 'type_name',
    type: 'text',
    value: '',
  },
];

const EmployeeTypeConfigForm = () => {
  const dispatch = useDispatch();

  const [expenseState, setExpenseState] = useState();

  if (expenseState) {
    dispatch(postEmployeeType(expenseState));
  }

  return (
    <CardContainer title="Create New Employee Type" form>
      <Form inputs={inputs} setState={setExpenseState} />
    </CardContainer>
  );
};

export default EmployeeTypeConfigForm;

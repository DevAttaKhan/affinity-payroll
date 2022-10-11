import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import { postLeaveRequest } from '../../store/feature/leaveRequest/leaveRequest';
const inputs = [
  {
    label: 'Employee Type Name',
    name: 'type_name',
    type: 'text',
    value: '',
  },
];

const LeaveRequestConfigForm = () => {
  const dispatch = useDispatch();

  const [expenseState, setExpenseState] = useState();

  if (expenseState) {
    dispatch(postLeaveRequest(expenseState));
  }

  return (
    <CardContainer title="Create New Leaves Request" form>
      <Form inputs={inputs} setState={setExpenseState} />
    </CardContainer>
  );
};

export default LeaveRequestConfigForm;

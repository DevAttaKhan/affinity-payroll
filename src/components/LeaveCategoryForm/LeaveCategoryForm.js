import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import { postLeave } from '../../store/feature/leave/leave';
const inputs = [
  {
    label: 'Category Name',
    name: 'category_name',
    type: 'text',
    value: '',
  },
  {
    label: 'Leave Days',
    name: 'no_of_days',
    type: 'number',
    value: 0,
  },
];

const LeaveCategoryForm = () => {
  const dispatch = useDispatch();

  const [leaveState, setLeaveState] = useState();

  if (leaveState) {
    dispatch(postLeave(leaveState));
  }

  return (
    <CardContainer title="New Leave Category" form>
      <Form inputs={inputs} setState={setLeaveState} />
    </CardContainer>
  );
};

export default LeaveCategoryForm;

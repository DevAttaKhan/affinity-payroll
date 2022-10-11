import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import { postLoan } from '../../store/feature/loan/loans';
const inputs = [
  {
    label: 'Loan Type Name',
    name: 'name',
    type: 'text',
    value: '',
  },
];

const LoanConfigForm = () => {
  const dispatch = useDispatch();

  const [expenseState, setExpenseState] = useState();

  if (expenseState) {
    dispatch(postLoan(expenseState));
  }

  return (
    <CardContainer title=" New Loan Type" form>
      <Form inputs={inputs} setState={setExpenseState} />
    </CardContainer>
  );
};

export default LoanConfigForm;

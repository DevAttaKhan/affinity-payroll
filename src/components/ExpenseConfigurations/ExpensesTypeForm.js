import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import { postExpense } from '../../store/feature/expenses/expenses';

const inputs = [
  {
    label: 'Expense Type Name',
    name: 'name',
    type: 'text',
    value: '',
  },
  {
    label: 'Allowed Amount',
    name: 'allowed_amount',
    type: 'number',
    value: '',
  },
];

const ExpensesTypeForm = () => {
  const dispatch = useDispatch();

  const [expenseState, setExpenseState] = useState();

  if (expenseState) {
    dispatch(postExpense(expenseState));
  }

  return (
    <CardContainer title="New Expense Category" form>
      <Form inputs={inputs} setState={setExpenseState} />
    </CardContainer>
  );
};

export default ExpensesTypeForm;

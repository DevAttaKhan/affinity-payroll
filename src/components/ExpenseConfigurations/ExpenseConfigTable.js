import React, { useState, useEffect } from 'react';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
import EditeIcon from '../../assets/Icons/EditeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenses } from '../../store/feature/expenses/expenses';

const columns = [
  { path: 'id', lable: 'S.NO' },
  {
    path: 'name',
    lable: 'Name',
    // content: (emp) => (
    //   <Avatar name={emp.name} designation={emp.designation} img={emp.src} />
    // ),
  },
  {
    path: 'allowed_amount',
    lable: 'Amount',
  },
  {
    path: 'edit',
    lable: 'Edit',
    content: (emp) => (
      <button>
        <EditeIcon width={16} />
      </button>
    ),
  },
];

const ExpenseConfigTable = () => {
  const dispatch = useDispatch();
  const [expenseState, setExpenseState] = useState([]);
  const expenseData = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(getExpenses());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (expenseData) setExpenseState(expenseData.data);
  }, [expenseData]);
  return (
    <CardContainer title="Expenses List">
      {expenseState.length > 0 ? (
        <Table data={expenseState} columns={columns} />
      ) : (
        <></>
      )}
    </CardContainer>
  );
};

export default ExpenseConfigTable;

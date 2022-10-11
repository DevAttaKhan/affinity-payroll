import React from 'react';
import ExpenseConfigTable from '../../components/ExpenseConfigurations/ExpenseConfigTable';
import ExpensesTypeForm from '../../components/ExpenseConfigurations/ExpensesTypeForm';
import './style.scss';
import AdminHeading from '../../components/AdminHeading/AdminHeading';

const Expense = () => {
  return (
    <>
      <AdminHeading title="Expense Type" />
      <ExpensesTypeForm />
      <ExpenseConfigTable />
    </>
  );
};

export default Expense;

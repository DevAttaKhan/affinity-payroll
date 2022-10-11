import React, { useState, useEffect } from 'react';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
import EditeIcon from '../../assets/Icons/EditeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getLoans } from '../../store/feature/loan/loans';

const columns = [
  { path: 'id', lable: 'S.NO' },
  {
    path: 'name',
    lable: 'Loan Type Name',
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

const LoanConfigTable = () => {
  const dispatch = useDispatch();

  const [loanState, setLoanState] = useState([]);
  const loanData = useSelector((state) => state.loans);
  useEffect(() => {
    dispatch(getLoans());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (loanData) setLoanState(loanData.data);
  }, [loanData]);

  return (
    <CardContainer title="Loans List">
      {loanState && loanState.length > 0 ? (
        <Table data={loanState} columns={columns} />
      ) : (
        <></>
      )}
    </CardContainer>
  );
};

export default LoanConfigTable;

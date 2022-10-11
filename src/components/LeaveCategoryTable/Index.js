import React, { useState, useEffect } from 'react';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
import EditeIcon from '../../assets/Icons/EditeIcon';
import { getLeaves } from '../../store/feature/leave/leave';
import { useDispatch, useSelector } from 'react-redux';

const columns = [
  { path: 'id', lable: 'S.NO' },
  {
    path: 'category_name',
    lable: 'Category Name',
  },
  {
    path: 'no_of_days',
    lable: 'No of Days',
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

const LeavesTable = () => {
  const dispatch = useDispatch();
  const [leaveState, setLeaveState] = useState([]);
  const leaveData = useSelector((state) => state.leaves);

  useEffect(() => {
    dispatch(getLeaves());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (leaveData) setLeaveState(leaveData.data);
  }, [leaveData]);

  return (
    <CardContainer title="Leaves Category">
      {leaveState && leaveState.length > 0 ? (
        <Table data={leaveState} columns={columns} />
      ) : (
        <></>
      )}
    </CardContainer>
  );
};

export default LeavesTable;

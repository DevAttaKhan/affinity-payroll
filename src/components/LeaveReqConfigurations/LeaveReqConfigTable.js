import React, { useState, useEffect } from 'react';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
import EditeIcon from '../../assets/Icons/EditeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getLeaveRequests } from '../../store/feature/leaveRequest/leaveRequest';

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

const LeaveRequestConfigTable = () => {
  const dispatch = useDispatch();
  const [leaveRequestState, setLeaveRequestState] = useState([]);
  const leaveRequestData = useSelector((state) => state.leaveRequests);

  useEffect(() => {
    dispatch(getLeaveRequests());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (leaveRequestData) setLeaveRequestState(leaveRequestData.data);
  }, [leaveRequestData]);

  return (
    <CardContainer title="LeaveRequests List">
      {leaveRequestState.length > 0 ? (
        <Table data={leaveRequestState} columns={columns} />
      ) : (
        <></>
      )}
    </CardContainer>
  );
};

export default LeaveRequestConfigTable;

import React, { useState, useEffect } from 'react';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
import EditeIcon from '../../assets/Icons/EditeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getShifts } from '../../store/feature/shift/shift';

const columns = [
  { path: 'id', lable: 'S.NO' },
  {
    path: 'name',
    lable: 'Shift Name',
  },
  {
    path: 'start_time',
    lable: 'Shift Starts',
  },
  {
    path: 'end_time',
    lable: 'Shift Ends',
  },
  {
    path: 'grace_period',
    lable: 'Grace Period',
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

const ShiftConfigTable = () => {
  const dispatch = useDispatch();
  const [shiftState, setShiftState] = useState([]);
  const shiftData = useSelector((state) => state.shifts);
  useEffect(() => {
    dispatch(getShifts());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (shiftData) setShiftState(shiftData.data);
  }, [shiftData]);

  return (
    <CardContainer title="Shifts List">
      {shiftState && shiftState.length > 0 ? (
        <Table data={shiftState} columns={columns} />
      ) : (
        <></>
      )}
    </CardContainer>
  );
};

export default ShiftConfigTable;

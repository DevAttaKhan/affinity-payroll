import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import { getOffices } from '../../store/feature/office/office';
import { postShift } from '../../store/feature/shift/shift';

const inputs = [
  {
    label: 'Shift Name',
    name: 'name',
    type: 'text',
    value: '',
  },
  {
    label: 'Shift Starts',
    name: 'start_time',
    type: 'time',
    value: '',
  },
  {
    label: 'Shift Ends',
    name: 'end_time',
    type: 'time',
    value: '',
  },
  {
    label: 'Grace Period',
    name: 'grace_period',
    type: 'time',
    value: '',
  },
  {
    label: 'Offices',
    name: 'office_id',
    type: 'dropdown',
    value: '',
    options: [],
  },
];

const ShiftConfigForm = () => {
  const dispatch = useDispatch();

  const [shiftState, setShiftState] = useState();
  const { data } = useSelector((state) => state.offices);

  useEffect(() => {
    if (data) inputs[inputs.length - 1].options = data;
  }, [data]);
  if (shiftState) {
    dispatch(postShift(shiftState));
  }

  useEffect(() => {
    dispatch(getOffices());
    // eslint-disable-next-line
  }, []);

  return (
    <CardContainer title="Shifts Configurations" form>
      {data && <Form inputs={inputs} setState={setShiftState} />}
    </CardContainer>
  );
};

export default ShiftConfigForm;

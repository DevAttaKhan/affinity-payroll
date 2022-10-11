import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import { postOffice } from '../../store/feature/office/office';

const inputs = [
  {
    label: 'Office Name',
    name: 'name',
    type: 'text',
    value: '',
  },
  {
    label: 'Address',
    name: 'address',
    type: 'text',
    value: '',
  },
];

const OfficeConfigForm = () => {
  const dispatch = useDispatch();

  const [officeState, setOfficeState] = useState();

  if (officeState) {
    dispatch(postOffice(officeState));
  }

  return (
    <CardContainer title="Add Office" form>
      <Form inputs={inputs} setState={setOfficeState} />
    </CardContainer>
  );
};

export default OfficeConfigForm;
